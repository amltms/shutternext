import styled from 'styled-components';
import { ItemAttributes } from '../../types';
import { motion } from 'framer-motion';

interface Props {
	item: ItemAttributes;
}

const SlideContainer = styled.div`
	position: relative;
	max-height: 100vh;
	min-width: 100%;
	overflow: hidden;
	mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.8) 100%);
`;

const Backdrop = styled(motion.img)`
	filter: brightness(60%);
	min-height: 100vh;
	width: 100%;
	margin-left: 50%;
	transform: translate(-50%, 0%);
	@media (orientation: portrait) {
		height: 100vh;
		width: auto;
	}
	@media screen and (max-width: 900px) {
		display: none;
	}
`;
const BackdropMobile = styled(motion.img)`
	filter: brightness(70%);
	width: 100%;
	display: none;
	@media screen and (max-width: 900px) {
		display: block;
	}
`;
export const Slide = ({ item }: Props) => {
	return (
		item && (
			<SlideContainer>
				<Backdrop src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
				<BackdropMobile src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
			</SlideContainer>
		)
	);
};
