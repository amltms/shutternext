import type { NextApiRequest, NextApiResponse } from 'next';
import { ItemAttributes } from '../../../types';
import getData from '../fetchData';

type ResponseData = {
	results?: ItemAttributes[];
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	try {
		const { type } = req.query;
		const data = await getData(`trending/${type}/week`);

		res.status(200).json({ results: data.results });
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}
