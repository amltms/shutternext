import { useRouter } from 'next/router';
import { GoStar } from 'react-icons/go';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { ItemAttributes } from '../../types';

interface Props {
	item: ItemAttributes;
}

const Title = styled.h1`
	@media screen and (max-width: 900px) {
		text-align: center;
		margin-top: 5rem;
		font-size: 2.5rem;
	}
`;
const DetailsContainer = styled.div`
	display: flex;
	margin: 2.5rem 0;
	@media screen and (max-width: 900px) {
		flex-direction: column;
		align-items: center;
		margin: 2rem 0;
	}
`;

const Info = styled.div`
	flex: 4;
	@media screen and (max-width: 900px) {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const ItemImg = styled.img`
	object-fit: contain;
	border-radius: 1.2rem;
	transition: 0.5s;
	position: relative;
	overflow: hidden;
	height: 300px;
	margin: 0 5rem 5rem 0;
	@media screen and (max-width: 900px) {
		height: 25rem;
		margin: 0;
	}
`;

const Synopsis = styled.p`
	width: 80%;
	@media screen and (max-width: 900px) {
		width: 100%;
		font-size: 1.3rem;
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
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		:hover {
			border: 2px solid rgba(255, 255, 255, 0.8);
		}
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
	p {
		color: ${theme.colors.secondaryTextColor};
		display: inline-block;
	}
`;

const Star = styled(GoStar)`
	fill: ${theme.colors.secondaryTextColor};
	margin-left: 0.3rem;
	font-size: 1.5rem;
`;

export const OverviewDetails = ({ item }: Props) => {
	const router = useRouter();
	const { type } = router.query;

	return (
		<>
			<Title>{item.title || item.name}</Title>

			<DetailsContainer>
				<ItemImg src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="poster" />
				<Info>
					<div>
						<Attribute>
							<p>{(item.release_date || item.first_air_date || '----').substring(0, 4)}</p>
						</Attribute>
						{item.runtime && (
							<Attribute>
								<p>{item.runtime} mins</p>
							</Attribute>
						)}
						<Attribute>
							<p>{item.vote_average?.toFixed(1)}</p>
							<Star />
						</Attribute>
					</div>

					<Genres>
						{item.genres?.map((g) => (
							<div key={g.id} onClick={() => router.push(`/genre/${type}/${g.id}`)}>
								{g.name}
							</div>
						))}
					</Genres>
					<Synopsis>{item.overview}</Synopsis>
				</Info>
			</DetailsContainer>
		</>
	);
};
