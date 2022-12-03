import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Cast } from '../../../types';

interface Props {
	person: Cast;
}

interface ImgProps {
	img: string;
}

const Person = styled.div`
	display: flex;
	margin: 0vw 3vw 3vw 0;
`;
const Info = styled.div`
	display: flex;
	align-items: center;
	margin-left: 1rem;
`;

const Role = styled.p`
	font-size: 20px;
	color: ${theme.colors.secondaryTextColor};
`;

const PersonImg = styled.div<ImgProps>`
	height: 8vw;
	width: 8vw;
	border-radius: 50%;
	background: url(${(p) => p.img});
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: 0 25%;
	@media (min-width: 1700px) {
		height: 5vw;
		width: 5vw;
	}
`;

export const CreditsProfile = ({ person }: Props) => {
	return (
		<Person>
			<PersonImg img={person.profile_path ? `https://image.tmdb.org/t/p/original/${person.profile_path}` : `/photo.jpg`} />
			<Info>
				<div>
					<h3>{person.name}</h3>
					<Role>{person.character || person.job}</Role>
				</div>
			</Info>
		</Person>
	);
};
