import styled from 'styled-components';
import NavLeft from './NavLeft';
type Props = {};

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

const Nav = (props: Props) => {
	return (
		<NavBar>
			<NavLeft />
		</NavBar>
	);
};

export default Nav;
