import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Credits, ItemAttributes } from '../../../types';
import { OverviewDetails } from '../../../components/itemOverview/OverviewDetails';
import { ItemCredits } from '../../../components/itemOverview/credits/ItemCredits';

const Container = styled(motion.div)`
	overflow: hidden;
	position: relative;
`;
const ItemDetails = styled.div`
	padding: 20% 5vw;
`;

const Backdrop = styled.img`
	z-index: -1;
	position: absolute;
	opacity: 1;
	width: 100%;
	filter: brightness(60%);
	mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.7) 100%);
	@media screen and (max-width: 900px) {
		height: 100vh;
		width: auto;
		margin-left: 50%;
		transform: translate(-50%, 0%);
	}
`;

const ItemOverview = () => {
	const router = useRouter();
	const { type, id } = router.query;

	const [item, setItem] = useState<ItemAttributes>();
	const [credits, setCredits] = useState<Credits>(null);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`/api/item/${type}/${id}`);
			const data = await response.json();
			setItem(data.details);
			setCredits(data.credits);
		};

		getData();
	}, [type, id]);

	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			{credits && item?.backdrop_path && (
				<>
					<Backdrop src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt="backdrop" />
					<ItemDetails>
						<OverviewDetails item={item} />
						<ItemCredits credits={credits} />
					</ItemDetails>
				</>
			)}
		</Container>
	);
};

export default ItemOverview;