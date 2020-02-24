const Kit = require('@celo/contractkit')

// Connect to the desired network
const alfajoresKit = Kit.newKit('https://alfajores-forno.celo-testnet.org')
const baklavaKit = Kit.newKit('https://baklava-forno.celo-testnet.org')

const getAccount = require('./utils/getAccount').getAccount

async function awaitWrapper(){
    let account = await getAccount()
    kit.addAccount(account.privateKey)
}

awaitWrapper()

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
    // Use the development network if you are using @celo/ganache-cli
    // https://www.npmjs.com/package/@celo/ganache-cli
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },
    alfajores: {
      provider: alfajoresKit.web3.currentProvider,
      network_id: 44786
    },
    baklava: {
      provider: baklavaKit.web3.currentProvider,
      network_id: 200110
    }
  }
};
