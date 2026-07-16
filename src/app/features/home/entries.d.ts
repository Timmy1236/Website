export interface Entry {
	title: string
	url: string
	date: string
	description: string
	preview: string
}

export interface Latest {
	blog: Entry
	changelog: Entry
}