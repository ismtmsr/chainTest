// Copyright (C) 2019 Kaula, Inc - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
var _balance = web3.eth.getBalance("0x1e0bb44d12f92d4c6f529a697c5fa5eb07ad7a48");
console.log(web3.fromWei(_balance.toFixed(0), 'ether'));
