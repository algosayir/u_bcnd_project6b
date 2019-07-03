var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic = 'sibling poverty exclude truth weekend employ prize pigeon exhibit fetch vibrant evoke tag bronze fiber';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/6e652b67e2614e129b519657c167cbea') 
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "^0.4.23"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};