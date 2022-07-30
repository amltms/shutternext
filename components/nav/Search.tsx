import styled from 'styled-components';
import { FC, useEffect, useRef, useState } from 'react';
import { MdSearch } from 'react-icons/md';

interface searchProps {
	active: boolean;
}

const SearchInput = styled.input<searchProps>`
	background: none;
	font-size: 1.2rem;
	border: none;
	transition: 0.4s;
	width: ${({ active }) => (active ? '15rem' : '0')};
	transform-origin: left;
	margin-left: 0.5rem;
	::placeholder {
		color: ${({ theme }) => theme.colors.secondaryTextColor};
		opacity: 1;
	}
`;

const SearchBox = styled.div<searchProps>`
	transition: 1s;
	border: 2.5px solid;
	padding: 0.5rem;
	padding-right: 0;
	border-color: ${({ active }) => (active ? 'rgba(215, 215, 215, 0.3)' : 'transparent')};
	border-radius: 1.5rem;
	display: flex;
	svg {
		transition: 0.5s;
		fill: ${({ theme, active }) => (active ? theme.colors.primaryTextColor : theme.colors.secondaryTextColor)};
	}
	svg:hover {
		fill: white;
	}
	@media screen and (max-width: 900px) {
		padding: 1rem;
	}
`;

export const Search: FC = () => {
	const [searchActive, setSearchActive] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [focused, setFocused] = useState(false);
	const onFocus = () => setFocused(true);
	const onBlur = () => setFocused(false);

	const searchInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		searchActive && searchInput.current && searchInput.current.focus();
	}, [searchActive]);

	return (
		<>
			<SearchBox active={searchActive}>
				<MdSearch size={30} onClick={() => setSearchActive(!searchActive)} />
				<SearchInput
					onChange={(e) => setSearchValue(e.target.value)}
					ref={searchInput}
					value={searchValue}
					onFocus={onFocus}
					onBlur={onBlur}
					placeholder="Search"
					active={searchActive}
				/>
			</SearchBox>
		</>
	);
};
