// Copyright (C) 2019 Kaula, Inc - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

const Web3 = require('web3');
const web3 = new Web3();

console.log('web3')
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
console.log('web3 setProvider')
let _account = web3.personal.newAccount("test");
console.log(_account)
