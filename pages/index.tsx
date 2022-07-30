import styled from 'styled-components';
type Props = {};

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

const index = (props: Props) => {
	return <Title>My page</Title>;
};

export default index;
