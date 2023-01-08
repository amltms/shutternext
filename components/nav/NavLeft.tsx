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
	@media screen and (max-width: 900px) {
		font-size: 40px;
		:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

const NavLinks = styled.div`
	span {
		display: none;
	}
	a {
		font-size: 22px;
		padding: 0.8rem;
		margin-left: 0.5rem;

		border-radius: 0.5rem;
		transition: 0.3s;
		color: ${({ theme }) => theme.colors.secondaryTextColor};
		:hover {
			color: ${({ theme }) => theme.colors.primaryTextColor};
			background: rgba(255, 255, 255, 0.2);
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
			</NavLinks>
		</Container>
	);
};

export default NavLeft;
