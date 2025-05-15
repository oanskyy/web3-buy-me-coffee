"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

type ButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
	imageSrc?: string
	className?: string
	variant?: "default" | "outlinedLight" | "rainbow" // ✅ add more variants as needed
}

export const Button = ({
	children,
	onClick,
	disabled,
	imageSrc,
	className,
	variant = "default" // ✅ default style
}: ButtonProps) => {
	const baseStyles =
		"rounded-full border border-solid transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto disabled:opacity-50"

	const variants = {
		default:
			"border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
		outlinedLight:
			"border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent",
		rainbow: "bg-white text-black border-transparent relative z-10"
	}

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(
				baseStyles,
				variants[variant],
				variant === "rainbow" && "rainbow-border",
				className
			)}
		>
			{imageSrc && (
				<Image
					className='dark:invert mr-1'
					src={imageSrc}
					alt='Icon'
					width={18}
					height={18}
				/>
			)}
			{children}
		</button>
	)
}
