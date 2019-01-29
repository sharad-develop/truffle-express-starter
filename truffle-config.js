var HDWalletProvider = require("truffle-hdwallet-provider");
//Note: private keys should not be hardcoded here
//Also, you can use mnemonic
var privateKeys = ["PRIVATE_KEY"];

module.exports = {
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(privateKeys, "https://rinkeby.infura.io/INFURA_KEY"),
      network_id: '4',
    }
  }
  
};
