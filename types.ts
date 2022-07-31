export interface ItemAttributes {
	id: number;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	media_type: string;
	genre_ids?: number[];
	genres: Genre[];
	title?: string;
	name?: string;
	release_date?: string;
	first_air_date?: string;
	last_air_date?: string;
}

export interface ItemDB {
	id: number;
	media_type: string;
}

export interface Details {
	id: number;
	backdrop_path: string;
	genres: Genre[];
	poster_path: string;
	media_type: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	runtime: number;
	title?: string;
	name?: string;
	release_date?: string;
	first_air_date?: string;
	last_air_date?: string;
}

export interface Credits {
	id: number;
	cast: Cast[];
	crew: Cast[];
}

export interface Cast {
	id: string;
	name: string;
	profile_path?: string;
	character?: string;
	job?: string;
	department?: string;
}

export interface Genre {
	id: number;
	name: string;
	img?: string;
	type?: string;
	item?: ItemAttributes;
}

export interface User {
	id?: number;
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
	saved?: ItemDB[];
	token?: string;
}
