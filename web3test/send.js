// Copyright (C) 2019 Kaula, Inc - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

const fs = require('fs');
const testTokenAbi = JSON.parse(fs.readFileSync('./build/contracts/TestToken.json', 'utf8')).abi

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
testTokenInstance = web3.eth.contract(testTokenAbi).at('0x801c015B1765a6C93a3A91CC115c1d7bfc135fCc')
let balance = testTokenInstance.transfer.call(
  '0x1e0bb44d12f92d4c6f529a697c5fa5eb07ad7a48',
  (10 * (10 ** 18)),
  (err, result) => {
    if (err) console.error(err);
    console.log('result:', result);
  }
);
