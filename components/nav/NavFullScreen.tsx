import styled from 'styled-components';
import Link from 'next/link';

interface Props {
	show: boolean;
}
interface MenuProps {
	show: boolean;
}

const FullScreenMenu = styled.div<MenuProps>`
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
	transition: visibility 1s, opacity 0.5s linear;
	${({ show }) => (show ? 'opacity:1; visibility: visible;' : 'opacity:0; visibility: hidden;')};

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

export const NavFullScreen = ({ show }: Props) => {
	return (
		<FullScreenMenu show={show}>
			<Link href="/">Home</Link>
			<Link href="/movie">Movies</Link>
			<Link href="/tv">TV</Link>
		</FullScreenMenu>
	);
};
