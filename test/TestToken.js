// Copyright (C) 2019 Kaula, Inc - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

require('truffle-test-utils').init()

const TestToken = artifacts.require("./TestToken.sol")

contract("TestToken", accounts => {
	it("先頭アカウントに初期トークン残高が送付されていること", async () => {
		const testTokenInstance = await TestToken.deployed()

		let balance = await testTokenInstance.balanceOf(accounts[0])
		balance = web3.utils.fromWei(balance, "ether")

		assert.equal(balance, 100)
	})

	it("追加発行可能であること", async () => {
		const testTokenInstance = await TestToken.deployed()

		let coinbaseBalance = await testTokenInstance.balanceOf(accounts[0])
		coinbaseBalance = web3.utils.fromWei(coinbaseBalance, "ether")

		// accounts[1]のトークン残高取得し、追加発行する
		let balanceBeforeMint = await testTokenInstance.balanceOf(accounts[1])
		balanceBeforeMint = web3.utils.fromWei(balanceBeforeMint, "ether")
		assert.equal(balanceBeforeMint, 0)

		// 50TT追加発行
		const value = 50
		const valueWei = web3.utils.toBN(value * (10 ** 18))
		await testTokenInstance.mint(
		accounts[1],
		valueWei
		)

		// accounts[1]に追加されていること
		let balanceAfterMinted = await testTokenInstance.balanceOf(accounts[1])
		balanceAfterMinted = web3.utils.fromWei(balanceAfterMinted, "ether")
		assert.equal(balanceAfterMinted, Number(balanceBeforeMint + value))

		// accounts[0]の残高に変更はないこと
		assert.equal(coinbaseBalance, 100)
	})

	context("送付 #transfer", async () => {
		it("送付可能であること", async () => {
			const testTokenInstance = await TestToken.deployed()
			const decimals = 18
			const value = 1
			let spenderOriginBalance = await testTokenInstance.balanceOf(accounts[0])
			spenderOriginBalance = web3.utils.fromWei(spenderOriginBalance, "ether")

			let receiverOriginBalance = await testTokenInstance.balanceOf(accounts[1])
			receiverOriginBalance = web3.utils.fromWei(receiverOriginBalance, "ether")

			// TT送付
			await testTokenInstance.transfer(
				accounts[1],
				web3.utils.toBN(value * (10 ** decimals))
			)

			let spenderBalance = await testTokenInstance.balanceOf(accounts[0])
			spenderBalance = web3.utils.fromWei(spenderBalance, "ether")

			let receiverBalance = await testTokenInstance.balanceOf(accounts[1])
			receiverBalance = web3.utils.fromWei(receiverBalance, "ether")

			assert.equal(spenderBalance - spenderOriginBalance, value * -1)
			assert.equal(receiverBalance - receiverOriginBalance, value)
		})

		it("送付可能であること", async () => {
			const testTokenInstance = await TestToken.deployed()
			const decimals = 18
			const value = 0.0000000001
			let receipt = await testTokenInstance.transfer(
				accounts[1],
				web3.utils.toBN(value * (10 ** decimals))
			)

			assert.web3Event(receipt, {
				event: 'Transfer'
			}, 'Transfer is emitted')
		})
	})
})
