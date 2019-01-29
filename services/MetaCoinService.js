const truffleContract = require('truffle-contract');
const metacoinContract = require('../build/contracts/MetaCoin.json');
const web3Utils = require('../utils/web3Utils');

/**
 * Service class that interfaces with the metacoin api contract
 */
class MetaCoinService{

    constructor(){

        this.web3 = web3Utils.getWeb3();
        this.GAS_LIMIT = 1000000;
        this.MetaCoin = truffleContract(metacoinContract);
        this.MetaCoin.setProvider(this.web3.currentProvider);

    }

    /**
     * Get all available accounts
     */
    async getAccounts(){

        let accts;

        try{
            accts = await this.web3.eth.getAccounts();
        }catch(err){
            console.log(err);
        }
        
        if(!accts || accts.length ==0){
            console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        }

        return accts;

    }

    /**
     * Get account balance 
     * 
     * @param {*} account 
     */
    async getBalance(account){

        let balance;

        try{
            const metacoin = await this.MetaCoin.deployed();
            balance = await metacoin.getBalanceInEth.call(account);

        }catch(err){
            console.log(err);
            balance = err;
        }

        return balance;
     
    }

    /**
     * Transfer coins from one account to another.
     * Retuens the transaction hash.
     * 
     * @param {*} sender 
     * @param {*} amount 
     * @param {*} receiver 
     */
    async sendCoin(sender, amount, receiver){

        let transactionHash ;

        try{

            const metacoin = await this.MetaCoin.deployed();
            const transaction = await metacoin.sendCoin.sendTransaction(receiver, amount, {from: sender, gas: this.GAS_LIMIT });

            transactionHash = transaction.receipt.transactionHash;

        }catch(err){

            console.log(err);
            transactionHash = err;
        }

        return transactionHash;

    }

    
}

module.exports = MetaCoinService;