import { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ItemAttributes } from '../../types';
import { Slide } from './Slide';
import { SlideContent } from './SlideContent';
import { SlideNavigation } from './SlideNavigation';

interface Props {
	items: ItemAttributes[];
}

interface SliderProps {
	currentSlide: number;
}

const Container = styled.div`
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const Slider = styled.div<SliderProps>`
	scrollbar-width: none;
	width: 100%;
	display: flex;
	transition: 0.8s;
	transform: translateX(${({ currentSlide }) => -currentSlide * 100}%);
`;

export const SlideShow: FC<Props> = ({ items }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const timer: { current: NodeJS.Timeout | null } = useRef(null);
	let slideArr = [0, 1, 2, 3];

	useEffect(() => {
		clearInterval(timer.current as NodeJS.Timeout);
		timer.current = setInterval(() => {
			if (document.hasFocus()) {
				setCurrentSlide(currentSlide + 1);
			}
		}, 10000);

		if (currentSlide > slideArr.length - 1) {
			setCurrentSlide(0);
		} else if (currentSlide < 0) {
			setCurrentSlide(slideArr.length - 1);
		}
	}, [currentSlide]);

	return (
		<Container>
			<SlideNavigation setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} slideArr={slideArr} />
			<SlideContent slideContent={items[currentSlide]} />
			<Slider currentSlide={currentSlide}>
				{slideArr.map((i) => (
					<Slide key={i} item={items[i]} />
				))}
			</Slider>
		</Container>
	);
};
