import { http, createConfig } from "wagmi"
import { base, mainnet, sepolia } from "wagmi/chains"
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors"

const projectId = "<WALLETCONNECT_PROJECT_ID>"  // 🔴 placeholder
// ✅ Use a .env.local file for safety:
// const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID!

// And in .env.local:
// NEXT_PUBLIC_WALLETCONNECT_ID=abc123yourid
// 🔐 NEXT_PUBLIC_ prefix is required for env vars used in the browser with Next.js.

export const wagmiConfig = createConfig({
	chains: [mainnet, base, sepolia],
	connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
	transports: {
		[mainnet.id]: http(),
		[base.id]: http(),
        [sepolia.id]: http(),
	}
})
