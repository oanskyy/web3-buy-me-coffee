"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

type ButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
	imageSrc?: string
	className?: string
}

export const Button = ({
	children,
	onClick,
	disabled,
	imageSrc = "/vercel.svg",
	className
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(
				"rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto disabled:opacity-50",
				className
			)}
		>
			<Image
				className='dark:invert'
				src={imageSrc}
				alt='Vercel logomark'
				width={20}
				height={20}
			/>
			{children}
		</button>
	)
}
