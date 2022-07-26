import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { ItemList } from '../components/items/ItemList';
import { SlideShow } from '../components/slideshow/SlideShow';
import Spinner from '../components/utilities/Spinner';

const Container = styled(motion.div)`
	color: white;
`;

const index = () => {
	const [items, setItems] = useState([]);
	const router = useRouter();
	const { type } = router.query;

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`/api/trending/${type ? String(type) : 'all'}`);
			const data = await response.json();
			setItems(data.results);
		};

		getData();
	}, [type]);

	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
			{items?.length !== 0 ? (
				<>
					<SlideShow items={items} />
					<ItemList items={items} />
				</>
			) : (
				<Spinner />
			)}
		</Container>
	);
};

export default index;
