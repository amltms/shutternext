import styled from 'styled-components';
import { Search } from './Search';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { theme } from '../../styles/theme';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	setToggle: Dispatch<SetStateAction<boolean>>;
	toggle: boolean;
}

const Container = styled.div`
	display: flex;
	@media screen and (max-width: 900px) {
		*:not(:last-child) {
			display: none;
		}
	}
`;

const MenuIcon = styled.div`
	z-index: 200;
	font-size: 2.5rem;
	svg {
		fill: ${theme.colors.secondaryTextColor};
	}
	display: none;
	@media screen and (max-width: 900px) {
		display: block;
	}
`;

export const NavRight = ({ setToggle, toggle }: Props) => {
	return (
		<Container>
			<Search />
			<MenuIcon>{toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu onClick={() => setToggle(!toggle)} />}</MenuIcon>
		</Container>
	);
};
