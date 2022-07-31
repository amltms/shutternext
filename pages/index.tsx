import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SlideShow } from '../components/slideshow/SlideShow';

const Title = styled.div`
	color: white;
`;

const index = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch('/api/trending');
			const data = await response.json();
			setItems(data.result);
		};
		getData();
	}, []);

	return <Title>{items?.length !== 0 && <SlideShow items={items} />}</Title>;
};

export default index;
