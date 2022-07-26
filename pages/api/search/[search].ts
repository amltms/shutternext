import type { NextApiRequest, NextApiResponse } from 'next';
import getData from '../fetchData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { search } = req.query;
		const data = await getData(`search/multi`, `&query=${search}`);

		res.status(200).json(data.results);
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}
