"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { WagmiProvider } from "wagmi"
import { wagmiConfig } from "@/lib/config"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

// Set up a React Query client.
const queryClient = new QueryClient()

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<WagmiProvider config={wagmiConfig}>
					<QueryClientProvider client={queryClient}>
						{children}
					</QueryClientProvider>
				</WagmiProvider>
			</body>
		</html>
	)
}
