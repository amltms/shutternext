import { GoStar } from 'react-icons/go';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Details } from '../../types';
import { Item } from '../items/Item';

interface Props {
	item: Details;
}

const DetailsContainer = styled.div`
	display: flex;
	margin: 2.5rem 0;
	> div:first-child {
		transform: scale(1.2);
		transform-origin: top left;
		margin: 0 5rem 5rem 0;
	}
	@media screen and (max-width: 900px) {
		flex-direction: column;
		align-items: center;
	}
`;

const Info = styled.div`
	flex: 4;

	p:first-child {
		div:last-child {
			margin-right: 0;
		}
	}
	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Synopsis = styled.p`
	width: 80%;
	@media screen and (max-width: 900px) {
		width: 100%;
		text-align: center;
	}
`;

const Genres = styled.div`
	margin: 1rem 0;
	font-size: 1.25rem;
	display: flex;
	flex-wrap: wrap;
	div {
		margin-right: 2rem;
		display: inline-block;
		border: 2px solid ${theme.colors.primaryDark};
		padding: 0.7rem;
		margin: 0.5rem 1rem 0.5rem 0rem;
		border-radius: 0.5rem;
	}
	div:last-child {
		margin-right: 0;
	}
	@media screen and (max-width: 900px) {
		justify-content: center;
	}
`;

const Attribute = styled.div`
	margin-right: 2rem;
	display: inline-block;
	color: ${theme.colors.secondaryTextColor};
`;

const Star = styled(GoStar)`
	fill: ${theme.colors.secondaryTextColor};
	margin-bottom: 0.15rem;
`;

export const OverviewDetails = ({ item }: Props) => {
	return (
		<>
			<h1>{item.title || item.name}</h1>

			<DetailsContainer>
				<Item item={item}></Item>
				<Info>
					<p>
						<Attribute>{(item.release_date || item.first_air_date || '----').substring(0, 4)}</Attribute>
						{item.runtime && <Attribute>{item.runtime} mins</Attribute>}
						<Attribute>
							{item.vote_average?.toFixed(1)} <Star />
						</Attribute>
					</p>

					<Genres>
						{item.genres?.map((g) => (
							<div key={g.id}>{g.name}</div>
						))}
					</Genres>
					<Synopsis>{item.overview}</Synopsis>
				</Info>
			</DetailsContainer>
		</>
	);
};
