// Copyright (C) 2019 Kaula, Inc - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential


var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
web3.eth.sendTransaction({
  from: '0x1e0bb44d12f92D4c6f529a697c5fa5eB07ad7a48',
  to: '0xbF84Fb76809860BC08ec9c3C56bD429cc0180ee7',
  value: web3.toWei(50, "ether"),
  gas: 5000000,
}, (err, receipt) => {
    if(err) console.error(err);
    console.log('receipt:', receipt)
});
