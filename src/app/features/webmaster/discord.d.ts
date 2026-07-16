declare global {
	interface Window {
		discordProfileCache?: Data
	}
}

export interface LanyardResponse {
	data: Data
	success: boolean
}

export interface Data {
	discord_user: DiscordUser
	discord_status: string
}

export interface DiscordUser {
	avatar: string
	bot: boolean
	discriminator: string
	display_name: string
	display_name_styles: null
	global_name: string
	id: string
	public_flags: number
	username: string
}