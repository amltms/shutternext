import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	backdrop-filter: blur(20px);
	background-color: rgba(0, 0, 0, 0.6);
	height: 100vh;
	width: 100%;
	z-index: 120;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	a {
		display: block;
		font-size: 2rem;
		font-weight: 300;
		padding: 1rem;
		:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const NavFullScreen = () => {
	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<Link href="/">Home</Link>
			<Link href="/search">Search</Link>
			<Link href="/movie">Movies</Link>
			<Link href="/tv">TV</Link>
		</Container>
	);
};
