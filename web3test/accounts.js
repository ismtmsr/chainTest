// Copyright (C) 2019 Kaula, Inc - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
let accounts = web3.eth.accounts
console.log(accounts);
