import type { NextApiRequest, NextApiResponse } from 'next';
import { Credits, ItemAttributes } from '../../../../types';
import getData from '../../fetchData';

type ResponseData = {
	details?: ItemAttributes;
	credits?: Credits;
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	try {
		const { type, id } = req.query;
		const details = await getData(`${type}/${id}`);
		const credits = await getData(`${type}/${id}/credits`);

		res.status(200).json({ details, credits });
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' });
	}
}
