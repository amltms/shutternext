import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
	display: flex;
	align-items: flex-end;
`;

const Logo = styled.a`
	line-height: 0.7;
	font-size: 50px;
	font-weight: 900;
	margin-right: 1.5rem;
	transition: 0.3s;
	letter-spacing: 0.1rem;
	color: ${({ theme }) => theme.colors.primary};
	-webkit-text-stroke: 1px ${({ theme }) => theme.colors.primary};
	:hover {
		color: rgba(0, 0, 0, 0);
	}
`;

const NavLinks = styled.div`
	display: flex;
	align-items: baseline;
	span {
		display: none;
	}
	a {
		font-size: 22px;
		padding: 0 1rem;
		margin: 0;
		position: relative;
		:after {
			content: '';
			position: absolute;
			width: 100%;
			transform: scaleX(0);
			height: 2px;
			bottom: -8px;
			left: 0;
			background-color: ${({ theme }) => theme.colors.primary};
			transition: transform 0.3s ease-out;
		}
		:hover:after {
			transform: scaleX(1);
		}
	}
	@media screen and (max-width: 900px) {
		display: none;
	}
`;

const NavLeft = () => {
	return (
		<Container>
			<Link href="/" passHref>
				<Logo>Shutter</Logo>
			</Link>
			<NavLinks>
				<Link href="/movie">
					<a>Movies</a>
				</Link>
				<Link href="/tv">
					<a>TV</a>
				</Link>
				<Link href="/saved">
					<a>Saved</a>
				</Link>
			</NavLinks>
		</Container>
	);
};

export default NavLeft;
