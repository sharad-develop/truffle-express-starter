# Truffle Express Starter Box

The intent of this truffle box is to be used as a starting point for creating rest api interfaces to ethereum contract using node express middleware.<br /> 
This dapp may or may not have a direct UI element.<br />
It provides a basic working example of the MetaCoin contract with express.<br />
The box uses express routes for clear separation of different routes.<br />
It comes pre-packaged with truffle hd wallet provider. So you have the option of using a local node or connecting directly to network with something like infura. I have tested this app on rinkeby using truffle hd wallet provider and ganache for local testing.<br />
Also, this is preconfigured with swagger, so you can view your api documentation at swagger url and also test.

**Pre-Requisites**

In order to run the Truffle box, you will need [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/), [Ganache](https://truffleframework.com/ganache) / Any other local/remote ethereum network, [Truffle](https://github.com/trufflesuite/truffle).

```
npm install -g truffle

```
Download [Ganache](https://truffleframework.com/ganache)

Note: you can use ganache-cli too.

**Build**
1. Download the Box.

```
truffle unbox sharad-develop/truffle-express-starter

```
2. Install node modules in your truffle box

```
npm install

```

3. Compile the truffle contracts

```
truffle compile

```

**Deploy**

1. Launch ganache client.

2. Deploy contract.

```
truffle migrate

```
If your are using some other network like rinkeby, then:

```
truffle migrate --network rinkeby

```

**Run**

1. Start express

```
npm start

```

2. Launch swagger

```
http://localhost:3000/docs

```
You can by pass swagger if you want and simply use http://localhost:3000


**Configuration**
In order to connect to any other node other than local, you will need to make appropriate changes to truffle-config.js and set 'network' environment
variable or override defaults in web3Uils.
