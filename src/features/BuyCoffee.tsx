"use client"

import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { createWalletClient, custom, createPublicClient } from "viem"
import type { WalletClient, PublicClient } from "viem"

export const BuyCoffee = () => {
	const [ethAmount, setEthAmount] = useState("")
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState("")

	const handleBuyCoffee = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		setSuccess(false)
		setError("")

		console.log("☕ Buy Coffee clicked")
		console.log("👛 Fund me with ETH Amount:", ethAmount)

		try {
			if (typeof window.ethereum !== "undefined") {
				console.log("🟢 MetaMask or EVM based wallet is installed!")

				const walletClient: WalletClient = createWalletClient({
					transport: custom(window.ethereum)
				})

				const addresses = await walletClient.requestAddresses()
				console.log("✅ Connected address:", addresses[0])

				// const publicClient: PublicClient = createPublicClient({
				// 	transport: custom(window.ethereum)
				// })

				// TODO: Replace with your contract address and ABI
				// await publicClient.simulateContract({
				// 	address: "0xYourContractAddress",
				// 	abi: [
				// 		// Replace with your contract ABI
				// 	],
				// 	functionName: "buyCoffee"
				// })

				// Simulate transaction delay
				setTimeout(() => {
					setLoading(false)
					setSuccess(true)
				}, 1500)
			} else {
				console.error("🛑 Please install MetaMask or an EVM based wallet!")
				setError("Please install MetaMask or an EVM based wallet.")
				setLoading(false)
			}
		} catch (error) {
			console.error("🛑 Transaction failed:", error)
			setError("Transaction failed. Please try again.")
			setLoading(false)
		}
	}

	const handleGetBalance = () => {
		// TODO: Implement balance retrieval logic
		console.log("🪙 Get Balance clicked")
	}

	return (
		<div className='space-y-2'>
			<div className='game7-halo-wrapper'>
				<Button variant='game7' onClick={handleGetBalance}>
					Get Balance
				</Button>
			</div>

			<form onSubmit={handleBuyCoffee} className='mt-6 space-y-4'>
				<label
					htmlFor='ethAmount'
					className='block text-sm font-medium text-gray-400'
				>
					ETH Amount
				</label>
				<input
					type='number'
					id='ethAmount'
					name='ethAmount'
					step='0.0001'
					min='0'
					placeholder='0.01'
					className='w-full rounded-lg border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none'
					value={ethAmount}
					onChange={e => setEthAmount(e.target.value)}
					required
				/>

				<Button
					type='submit'
					disabled={loading || !ethAmount || parseFloat(ethAmount) <= 0}
					variant='rainbow'
				>
					{loading
						? "Sending..."
						: `☕ Buy Coffee (${ethAmount || "0.001"} ETH)`}
				</Button>
			</form>

			{success && (
				<p className='text-purple-600 text-sm'>Thanks for the coffee! 💜</p>
			)}
			{error && <p className='text-red-600 text-sm'>{error}</p>}
		</div>
	)
}
