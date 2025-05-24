"use client"

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import Image from "next/image"
import React from "react"

type ButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
	imageSrc?: string // for static images
	icon?: LucideIcon // for Lucide icons
	className?: string
	variant?: "default" | "outlinedLight" | "rainbow" | "game7"
	size?: "sm" | "md" | "lg"
	type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	disabled,
	imageSrc,
	className,
	variant = "default", // ✅ default style
	size = "md",
	type = "button"
}: ButtonProps) => {
	const baseStyles =
		"rounded-full border border-solid transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"

	const variants = {
		default:
			"border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
		outlinedLight:
			"border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent",
		rainbow: "bg-white text-black border-transparent relative z-10",
		game7:
			"bg-white text-black border border-transparent z-10 relative hover:scale-[1.02]"
	}

	const extraClasses = [
		variant === "rainbow" && "rainbow-border",
		variant === "game7" && "game7-halo-button"
	]
		.filter(Boolean)
		.join(" ")

	const sizes = {
		sm: "text-sm px-4 py-2 h-8",
		md: "text-base px-5 py-2.5 h-10",
		lg: "text-base px-6 py-3 h-12"
	}

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={cn(
				baseStyles,
				variants[variant],
				sizes[size],
				extraClasses,
				className
			)}
		>
			{typeof imageSrc === "string" && (
				<Image
					className='dark:invert mr-1'
					src={imageSrc}
					alt='Icon'
					width={18}
					height={18}
				/>
			)}
			{typeof imageSrc !== "string" &&
				imageSrc &&
				React.createElement(imageSrc, {
					className: "dark:invert mr-1",
					size: 18
				})}
			{children}
		</button>
	)
}
