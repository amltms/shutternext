import styled from 'styled-components';

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

const index = () => {
	return <Title></Title>;
};

export default index;
