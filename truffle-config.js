require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(process.env.PRIVATE_KEY, process.env.RINKEBY_RPC_URL);
      },
      network_id: 42,
      skipDryRun: true,
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider(process.env.PRIVATE_KEY, process.env.MAINNET_RPC_URL);
      },
      network_id: 1,
      skipDryRun: true,
    }
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "0.8.9",
    }
  },
  db: {
    enabled: false
  }
}
