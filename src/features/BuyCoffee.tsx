"use client"

import { Button } from "@/components/ui/Button"
import { useState } from "react"

export const BuyCoffee = () => {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)

	const handleBuyCoffee = async () => {
		setLoading(true)
		setSuccess(false)

		// ✨ This is where you'll call the contract later
		setTimeout(() => {
			setLoading(false)
			setSuccess(true)
		}, 1500)
	}

	return (
		<div className='space-y-2 text-center'>
			<Button
				onClick={handleBuyCoffee}
				disabled={loading}
				variant='rainbow'
			>
				{loading ? "Sending..." : "☕ Buy Coffee (0.001 ETH)"}
			</Button>

			{success && (
				<p className='text-green-600 text-sm'>Thanks for the coffee! 💜</p>
			)}
		</div>
	)
}
