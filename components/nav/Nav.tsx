import styled from 'styled-components';
import NavLeft from './NavLeft';
import { NavRight } from './NavRight';

const NavBar = styled.div`
	z-index: 1000;
	width: 100%;
	position: fixed;
	transition: 0.4s;
	padding: 2vw 4vw;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const Nav = () => {
	return (
		<NavBar>
			<NavLeft />
			<NavRight />
		</NavBar>
	);
};

export default Nav;
