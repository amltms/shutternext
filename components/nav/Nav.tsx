import { useEffect, useState } from 'react';

import styled from 'styled-components';
import NavLeft from './NavLeft';
import { NavRight } from './NavRight';
import { NavFullScreen } from './NavFullScreen';
import { useRouter } from 'next/router';
import { theme } from '../../styles/theme';

interface Scroll {
	scrolled: boolean;
}

const NavBar = styled.div<Scroll>`
	z-index: 1000;
	width: 100%;
	position: fixed;
	transition: 0.4s;
	padding: 4rem ${theme.container.width};
	display: flex;
	justify-content: space-between;
	align-items: center;
	:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: scaleY(${({ scrolled }) => (scrolled ? '1' : '0')});
		transform-origin: top center;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(20px);
		z-index: -1;
		transition: transform 0.3s;
	}
	${({ scrolled }) => scrolled && 'padding:2rem 2vw;'};
	@media screen and (max-width: 900px) {
		padding: 1.5rem;
	}
`;

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);
	const [fullScreenToggle, setFullScreenToggle] = useState(false);
	const router = useRouter();

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

	useEffect(() => {
		fullScreenToggle && setFullScreenToggle(false);
	}, [router.asPath]);

	return (
		<NavBar scrolled={scrolled}>
			{fullScreenToggle && <NavFullScreen />}
			<NavLeft />
			<NavRight toggle={fullScreenToggle} setToggle={setFullScreenToggle} />
		</NavBar>
	);
};

export default Nav;
