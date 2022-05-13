require('babel-register')
require('babel-polyfill')
const fs = require('fs');
const path = require("path");
const Caver = require('caver-js')
const mnemonic = "spend middle express unhappy entry vessel lake reflect width hope maze then";


const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const privateWalletKey = "0xbe67afc6921bd81da32526eff86d211567dc95682608471fc4b26972a5af3ec30x000x216ded88f5301d165ec11ae1ae4bc6bc7121cba5";

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    klaytn: {
      provider: () => {
        const pks = JSON.parse(fs.readFileSync(path.resolve(__dirname) + '/privateKeys.js'))

        return new HDWalletProvider(pks, "http://localhost:8551", 0, pks.length)
      },
      network_id: '203', //Klaytn baobab testnet's network id
      gas: '8500000',
      gasPrice: null
    },
    baobab: {
      provider: () =>  new HDWalletProvider(privateWalletKey, "https://api.baobab.klaytn.net:8651"),
      network_id: '1001', //Klaytn baobab testnet's network id
      gas: '8500000',
      timeoutBlocks: 200,
      gasPrice: null
      
    },
  },
  compilers: {
    solc: {
      version: '0.4.25'    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
