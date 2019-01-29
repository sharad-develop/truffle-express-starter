/**
 * Utility for web3 functions
 */
const Web3 = require('web3');
const truffleConfig = require('../truffle-config');
const network = process.env.network || 'development';

module.exports = {

    /**
     * Construct web3 object from truffle config
     */
    getWeb3: function(){
   
        const nw = truffleConfig.networks[network];
        if(nw.provider){
            return new Web3(nw.provider());
        }else{
            //fallback on host/port if provider not defined
           return new Web3(new Web3.providers.HttpProvider("http://"+nw.host+":"+nw.port));
        }
   
    }

}
