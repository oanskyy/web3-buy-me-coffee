"use client"

import { Provider } from "ethers"
import { createWalletClient, custom } from "viem"
import { Button } from "@/components/ui/Button"
import { useState } from "react"

type EthereumProvider = Provider & {
	request: (...args: unknown[]) => Promise<unknown>
}

declare global {
	interface Window {
		ethereum?: EthereumProvider
	}
}

export const WalletConnect = () => {
	const [isConnected, setIsConnected] = useState(false)

	const handleConnect = async () => {
		console.log("Connect Wallet")
		// Add your wallet connection logic here
		// For example, you can use the connect function from wagmi
		// connect()

		if (typeof window.ethereum !== "undefined") {
			console.log("MetaMask or EVM based wallet is installed!")

			const client = createWalletClient({
				transport: custom(window.ethereum!)
			})
			setIsConnected(true)
			// const address = await client.getAddresses()
			// console.log("Connected getaddress:", address)
			const address = await client.requestAddresses()
			console.log("Connected address:", address)
			// getAddresses() gets the currently connected addresses without prompting the user
			// requestAddresses() triggers a wallet popup asking for user permission to access their addresses
		} else {
			console.error("Please install MetaMask or an EVM based wallet!")
			//  since this is an error condition where MetaMask is not installed and the app cannot function properly, console.error() is more appropriate.
		}
	}

	return (
		<div className='space-y-2'>
			<Button onClick={handleConnect}>
				{isConnected ? "Connected" : "Connect Wallet"}
			</Button>
		</div>
	)
}
