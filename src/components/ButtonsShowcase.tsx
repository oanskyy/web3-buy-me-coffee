"use client"

import { Button } from "@/components/ui/Button"

export default function ButtonsShowcase() {
	return (
		<div className='space-y-6 max-w-xl mx-auto py-12 text-center'>
			<h2 className='text-2xl font-bold mb-4'>🎨 Button Variants Showcase</h2>

			<div className='flex flex-wrap gap-4 justify-center'>
				<Button variant='default'>Default</Button>
				<Button variant='outlinedLight'>Outlined Light</Button>
				<Button variant='rainbow'>Rainbow</Button>
			</div>

			<div className='pt-10'>
				<div className='game7-glow-wrapper'>
					<button className='game7-glow-button'>Game7 Inspired</button>
				</div>
			</div>
		</div>
	)
}
