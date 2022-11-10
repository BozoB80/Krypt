// https://eth-mainnet.g.alchemy.com/v2/1nZcQbTlwWEx00ER3e61D78oDCxGqfC_

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/ZSn3WtstNElhio9dhS_5VrzOw3BuTzYk',
      accounts: ['e6b609d41f7e87cbbb8e62a2af73e99d8bbc9363199bff56f62bd2597eb69b6b'],
    },
  },
};