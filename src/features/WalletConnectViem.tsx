"use client"

import { createWalletClient, custom } from "viem"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { formatAddress } from "@/lib/utils"
import { Wallet, Unplug } from "lucide-react"
declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ethereum?: any
		// ethereum?: EthereumProvider
	}
}

export const WalletConnectViem = () => {
	const [address, setAddress] = useState<string | null>(null)

	const handleConnect = async () => {
		console.log("Connect Wallet")

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
					<Button
						onClick={() => setAddress(null)}
						variant='outlinedLight'
						icon={Unplug}
					>
						Disconnect
					</Button>
					<p>Connected: {formatAddress(address)}</p>
				</>
			) : (
				<Button onClick={handleConnect} icon={Wallet}>
					Connect Wallet (Viem)
				</Button>
			)}
		</div>
	)
}
