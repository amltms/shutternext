import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavLeft from './NavLeft';
import { NavRight } from './NavRight';

interface Scroll {
	scrolled: boolean;
}

const NavBar = styled.div<Scroll>`
	z-index: 1000;
	width: 100%;
	position: fixed;
	transition: 0.4s;
	padding: 2vw 4vw;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: scaleY(${({ scrolled }) => (scrolled ? '1' : '0')});
		transform-origin: top center;
		background: rgba(0, 0, 0, 1);
		z-index: -1;
		transition: transform 0.3s;
	}
	${({ scrolled }) => scrolled && 'padding:1.5rem 2vw;'};
	@media screen and (max-width: 900px) {
		padding: 1rem;
	}
`;

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 10;
			show ? setScrolled(true) : setScrolled(false);
		};

		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<NavBar scrolled={scrolled}>
			<NavLeft />
			<NavRight />
		</NavBar>
	);
};

export default Nav;
