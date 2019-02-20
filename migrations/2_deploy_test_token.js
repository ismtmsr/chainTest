// Copyright (C) 2019 Kaula, Inc - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

const TestToken = artifacts.require('./TestToken.sol')

module.exports = function (deployer, network, accounts) {
  const name = "TestToken"
  const symbol = "TT"
  const decimals = 18
  const initSupply = web3.utils.toBN(100 * (10 ** decimals))

  return deployer.then(() => {
    return deployer.deploy(
      TestToken,
      name,
      symbol,
      decimals,
      initSupply
    )
  })
}
