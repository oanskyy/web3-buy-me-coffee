"use client"

import { Provider } from "ethers"
import { createWalletClient, custom } from "viem"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { formatAddress } from "@/lib/utils"

type EthereumProvider = Provider & {
	request: (...args: unknown[]) => Promise<unknown>
}

declare global {
	interface Window {
		ethereum?: EthereumProvider
	}
}

export const WalletConnectViem = () => {
	const [address, setAddress] = useState<string | null>(null)

	const handleConnect = async () => {
		console.log("Connect Wallet")
		// Add your wallet connection logic here
		// For example, you can use the connect function from wagmi
		// connect()

		if (typeof window.ethereum !== "undefined") {
			console.log("🟢 MetaMask or EVM based wallet is installed!")

			const client = createWalletClient({
				transport: custom(window.ethereum!)
			})

			// const address = await client.getAddresses()
			// console.log("Connected getaddress:", address)
			const addresses = await client.requestAddresses()
			setAddress(addresses[0])
			console.log("✅ Connected address:", addresses)
			// getAddresses() gets the currently connected addresses without prompting the user
			// requestAddresses() triggers a wallet popup asking for user permission to access their addresses
		} else {
			console.error("🛑 Please install MetaMask or an EVM based wallet!")
			//  since this is an error condition where MetaMask is not installed and the app cannot function properly, console.error() is more appropriate.
		}
	}

	return (
		<div className='space-y-2'>
			{address ? (
				<>
					<p className='text-sm text-gray-600'>
						Connected: {formatAddress(address)}
					</p>
					<Button onClick={() => setAddress(null)}>Disconnect</Button>
				</>
			) : (
				<Button onClick={handleConnect}>Connect Wallet (Viem)</Button>
			)}
		</div>
	)
}
