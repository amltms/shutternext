import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { ItemList } from '../../components/items/ItemList';

const SearchContainer = styled(motion.div)`
	padding: 12vw 7vw;
`;

const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		color: #333;
	}
`;

const Search = styled.div`
	margin: 5rem 0;
	border: 2px solid rgba(255, 255, 255, 0.5);
	border-radius: 1.5rem;
	padding: 0.5rem 0.5rem;
	display: flex;
	align-items: center;
	svg {
		fill: rgba(255, 255, 255, 0.5);
	}
	input {
		margin-left: 0.5rem;
		font-size: 2rem;
		border: none;
		background: none;
		width: 100%;
	}
`;

const index = () => {
	//mobile search
	const [searchItems, setSearchItems] = useState([]);
	const [search, setSearch] = useState('');
	const [typing, setTyping] = useState(false);
	let filterTimeout: { current: NodeJS.Timeout | null } = useRef(null);

	const handleSearch = (searchInput: string) => {
		searchInput === '' && setSearchItems([]);
		setSearch(searchInput);
		setTyping(true);
		/*debounce */
		clearInterval(filterTimeout.current as NodeJS.Timeout);
		filterTimeout.current = setTimeout(async () => {
			const response = await fetch(`/api/search/${searchInput}`);
			const data = await response.json();
			setSearchItems(data);
			setTyping(false);
		}, 600);
	};

	return (
		<SearchContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			<Search>
				<MdSearch size={40} />
				<input type="text" value={search} onChange={(e) => handleSearch(e.target.value)} />
			</Search>
			{searchItems.length === 0 && !typing && search !== '' ? (
				<Text>
					<h2>No Results</h2>
				</Text>
			) : (
				search && <ItemList items={searchItems} />
			)}
		</SearchContainer>
	);
};

export default index;
