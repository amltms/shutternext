import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Credits, ItemAttributes } from '../../../types';
import { OverviewDetails } from '../../../components/itemOverview/OverviewDetails';
import { ItemCredits } from '../../../components/itemOverview/credits/ItemCredits';
import Spinner from '../../../components/utilities/Spinner';
import { theme } from '../../../styles/theme';

const Container = styled(motion.div)`
	overflow: hidden;
	position: relative;
	padding: 20% ${theme.container.width};
`;

const Backdrop = styled.img`
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
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
		<>
			{credits && item?.backdrop_path ? (
				<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
					<Backdrop src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt="backdrop" />
					<OverviewDetails item={item} />
					<ItemCredits credits={credits} />
				</Container>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default ItemOverview;
