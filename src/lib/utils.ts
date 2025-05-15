// lib/utils.ts
export function cn(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(" ")
}
export function formatAddress(address: string) {
	if (!address) return ""
	return `${address.slice(0, 6)}...${address.slice(-4)}`
}
export function formatNumber(num: number) {
	if (num > 1e6) return `${(num / 1e6).toFixed(2)}M`
	if (num > 1e3) return `${(num / 1e3).toFixed(2)}K`
	return num.toString()
}
export function formatDate(date: Date) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}
	return new Intl.DateTimeFormat("en-US", options).format(date)
}
export function formatDateTime(date: Date) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit"
	}
	return new Intl.DateTimeFormat("en-US", options).format(date)
}
export function formatDateTimeWithSeconds(date: Date) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}
	return new Intl.DateTimeFormat("en-US", options).format(date)
}

export function formatDateTimeWithTimezone(date: Date) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZoneName: "short"
	}
	return new Intl.DateTimeFormat("en-US", options).format(date)
}

export function formatDateTimeWithTimezoneAndSeconds(date: Date) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZoneName: "short"
	}
	return new Intl.DateTimeFormat("en-US", options).format(date)
}
