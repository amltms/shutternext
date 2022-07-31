import type { NextApiRequest, NextApiResponse } from 'next';
import getData from '../fetchData';

type ResponseData = {
	result?: any;
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	try {
		const data = await getData(`trending/all/week`);

		res.status(200).json({ result: data.results });
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}
