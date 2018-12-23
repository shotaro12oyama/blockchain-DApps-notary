var HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'trick core barely fold sample icon display hollow smoke task emotion pepper';
const infura = 'https://rinkeby.infura.io/v3/329f5cab0d5649a8bb61c31c2bc0cbed'

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infura),
      network_id: 4,
      gas : 6700000,
      gasPrice : 10000000000
    }
  },

  compilers: {
    solc: {
      version: "0.4.24"    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};