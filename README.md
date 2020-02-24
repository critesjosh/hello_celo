# Hello Celo Truffle Box

Use this Truffle Box to get started building a mobile dapp using Celo and React Native in Typescript. We will build a simple React Native application that we can use to read and update a contract on the Alfajores test network.

## Smart contract development

You can migrate the `HelloWorld.sol` contract to a development network with
```bash
$ truffle migrate --network (development/alfajores/baklava)
```
If you want to migrate to a public development network, you will need to get funded from the appropriate faucet. 
 - [Alfajores faucet](#)
 - [Baklava faucet](#)

The account you will be deploying from is the account associated with the private key in the `./secret` file. This file comes empty, but a private key will be generated for you and your account address will be printed in teh console with `$ npm run account`.

## Application development with Expo

[Expo](#) is a tool that makes developing React Native applications much easier. We will be using Expo for easy setup.

Install it with:
```
$ npm install expo-cli --global
```

You can start the application with
```
$ expo start
```