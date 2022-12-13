import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ItemList } from '../../../components/items/ItemList';
import Spinner from '../../../components/utilities/Spinner';

const Container = styled(motion.div)`
	overflow: hidden;
	position: relative;
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

const Details = styled.div`
	padding: 20% 5vw;
`;

const Index = () => {
	const router = useRouter();
	const { type, id } = router.query;
	const [items, setItems] = useState([]);
	const [genres, setGenres] = useState([]);
	const genreName = genres.find((genre) => genre.id === Number(id))?.name;

	function getRandomInt(max: number): number {
		return Math.floor(Math.random() * max);
	}

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`/api/genres/${type}`);
			const data = await response.json();
			setGenres(data);
		};

		getData();
	}, []);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`/api/genres/${type}/${id}`);
			const data = await response.json();
			setItems(data);
		};

		getData();
	}, [type, id]);

	return items.length === 0 ? (
		<Spinner />
	) : (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			<Backdrop src={`https://image.tmdb.org/t/p/original/${items[getRandomInt(19)]?.backdrop_path}`} alt="backdrop" />
			<Details>
				<h1>{genreName}</h1>
				<ItemList items={items} />
			</Details>
		</Container>
	);
};

export default Index;
