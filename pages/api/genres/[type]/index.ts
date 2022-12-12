import type { NextApiRequest, NextApiResponse } from 'next';
import getData from '../../fetchData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { type } = req.query;

		const data = await getData(`genre/${type}/list`);
		res.status(200).json(data.genres);
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}
