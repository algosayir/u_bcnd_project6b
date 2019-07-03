# Blockchain nanodegree project 6b 
# Ethereum DApp for Tracking Items through Supply Chain
This repository is a modification of boiler plate code on the following repository: 
https://github.com/udacity/nd1309-Project-6b-Example-Template

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/algosayir/u_bcnd_project6b.git
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

In a separate terminal window, Compile smart contracts:

```
truffle compile --all
```

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate --reset
```

Test smart contracts:

```
truffle test
```

In a separate terminal window, launch the DApp:

```
npm run dev
```

To migrate smart contract to Rinkeby test network use:
```
truffle migrate --reset --network rinkeby
```

## Deplyment 
### Contract Address
Fixed SupplyChain contract address 

[0x38921d1e24789ACcD403537d79DE1fC025E68d70](https://rinkeby.etherscan.io/address/0x38921d1e24789ACcD403537d79DE1fC025E68d70)

```
Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xaeeb29061b6c5ea945a01ab146ada49de9a2c4dc35a94af0da8955701944f371
   > Blocks: 0            Seconds: 9
   > contract address:    0x38921d1e24789ACcD403537d79DE1fC025E68d70
   > block number:        4670051
   > block timestamp:     1562180574
   > account:             0x6d1657F913a3BD62212ce94C60c8DC2a460fD951
   > balance:             18.65266282
   > gas used:            3247333
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03247333 ETH
```

This was built using the following:
### node version
v10.15.3

### Truffle version
Truffle v5.0.14 

### Web3 version
web3 ^1.0.0-beta.37

### Ganache-CLI version
Ganache CLI v6.4.3 (ganache-core: 2.5.5)

### truffle-hdwallet-provider version
"truffle-hdwallet-provider": "^1.0.12"

---------------------------------------------------------------------

## UML diagrams
### State diagram 
[State diagram](https://github.com/algosayir/u_bcnd_project6b/blob/master/images/State_diagram.png)
### Sequence diagram 
[Sequence diagram](https://github.com/algosayir/u_bcnd_project6b/blob/master/images/Sequence_diagram.png)
### Activity diagram 
[Activity diagram](https://github.com/algosayir/u_bcnd_project6b/blob/master/images/Activity_diagram.png)
### Class diagram 
Class diagram was generated using [sol2uml](https://github.com/naddison36/sol2uml)

[Class diagram](https://github.com/algosayir/u_bcnd_project6b/blob/master/images/Class_diagram.png)
