import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { ItemList } from '../../components/items/ItemList';
import Spinner from '../../components/utilities/Spinner';
import { theme } from '../../styles/theme';

const SearchContainer = styled(motion.div)`
	padding: 12vw ${theme.container.width};
`;

const Text = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		color: #333;
	}
`;

const index = () => {
	const router = useRouter();
	const { search } = router.query;
	const [searchItems, setSearchItems] = useState([]);
	const [typing, setTyping] = useState(false);
	let filterTimeout: { current: NodeJS.Timeout | null } = useRef(null);

	const getData = async () => {
		const response = await fetch(`/api/search/${search}`);
		const data = await response.json();
		setSearchItems(data);
		setTyping(false);
	};

	useEffect(() => {
		setTyping(true);
		/*debounce */
		clearInterval(filterTimeout.current as NodeJS.Timeout);
		filterTimeout.current = setTimeout(() => {
			getData();
		}, 400);
	}, [search]);

	// if theres no search results, show a spinner while typing, and a message when not typing
	if (searchItems.length === 0) {
		return typing ? (
			<Spinner />
		) : (
			<Text>
				<h2>No Results</h2>
			</Text>
		);
	}

	return (
		<SearchContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			<ItemList items={searchItems} />
		</SearchContainer>
	);
};

export default index;
