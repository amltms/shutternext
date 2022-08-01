import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const SpinnerContainer = styled(motion.div)`
	background: black;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 400;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
	width: 64px;
	height: 64px;
	border: 8px solid;
	border-color: #000 transparent #555 transparent;
	border-radius: 50%;
	animation: ${rotate} 1.2s linear infinite;
`;

function Spinner() {
	return (
		<SpinnerContainer animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
			<LoadingSpinner />
		</SpinnerContainer>
	);
}

export default Spinner;
