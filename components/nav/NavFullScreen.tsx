import styled from 'styled-components';
import Link from 'next/link';

interface Props {
	show: boolean;
}

const FullScreenMenu = styled.div<Props>`
	position: fixed;
	background-color: black;
	height: 100vh;
	width: 100%;
	z-index: 120;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	display: ${({ show }) => (show ? 'flex' : 'none')};

	a,
	button {
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
			<Link href="/movie">Movies</Link>
			<Link href="/tv">TV</Link>
			<Link href="/saved">Saved</Link>
		</FullScreenMenu>
	);
};
