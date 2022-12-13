import type { NextApiRequest, NextApiResponse } from 'next';
import { Genre } from '../../../../types';
import getData from '../../fetchData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const type = req.query.type as string;

		if (type === 'all') {
			let [movies, tv] = await Promise.all([getGenres('movie'), getGenres('tv')]);

			movies = movies.map((obj) => ({ ...obj, type: 'movie' }));
			tv = tv.map((obj) => ({ ...obj, type: 'tv' }));
			const all = [...movies, ...tv];
			const unique = all.filter((value, index, self) => index === self.findIndex((t) => t.id === value.id && t.name === value.name));

			res.status(200).json(unique);
		} else {
			const { genres } = await getData(`genre/${type}/list`);
			res.status(200).json(genres);
		}
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}

const getGenres = async (type: string): Promise<Genre[]> => {
	const { genres } = await getData(`genre/${type}/list`);
	return genres;
};
