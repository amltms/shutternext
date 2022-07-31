import { FC } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styled from 'styled-components';

interface Props {
	setCurrentSlide: any;
	currentSlide: number;
	slideArr: number[];
}
interface IndicatorProps {
	currentIndicator: number;
	currentSlide: number;
}

const NavBtn = styled.button`
	position: absolute;
	z-index: 100;
	font-size: 5rem;
	opacity: 0;
	padding: 1rem;
	height: 100%;
	&:hover {
		opacity: 1;
	}

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

const DotContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	position: absolute;
	bottom: 2rem;
	z-index: 10;
	cursor: pointer;
	> div {
		display: inline-block;
		padding: 1rem 0.2rem;
	}
`;

const Indicator = styled.div<IndicatorProps>`
	height: 3px;
	width: 3rem;
	background-color: ${({ currentIndicator, currentSlide, theme }) => (currentIndicator === currentSlide ? theme.colors.primary : 'rgba(122, 122, 122, 0.2)')};
	display: inline-block;
`;

export const SlideNavigation: FC<Props> = ({ setCurrentSlide, currentSlide, slideArr }) => {
	return (
		<>
			<NavBtn style={{ right: 0 }} onClick={() => setCurrentSlide(currentSlide + 1)}>
				<MdNavigateNext />
			</NavBtn>

			<NavBtn onClick={() => setCurrentSlide(currentSlide - 1)}>
				<MdNavigateBefore />
			</NavBtn>
			<DotContainer>
				{slideArr.map((i) => (
					<div key={i} onClick={() => setCurrentSlide(i)}>
						<Indicator key={i} currentIndicator={i} currentSlide={currentSlide} />
					</div>
				))}
			</DotContainer>
		</>
	);
};
