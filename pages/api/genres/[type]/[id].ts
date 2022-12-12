import type { NextApiRequest, NextApiResponse } from 'next';
import getData from '../../fetchData';

type ResponseData = {
	results?: any;
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	try {
		const { type, id } = req.query;
		const data = await getData(`discover/${type}`, `&with_genres=${id}`);
		res.status(200).json(data.results);
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}
