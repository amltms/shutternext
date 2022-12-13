import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ItemAttributes } from '../../types';

interface Props {
	slideContent: ItemAttributes;
}

const Content = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	z-index: 2;
	bottom: 0;
	padding: 0 4vw;
	padding-bottom: 5vw;
	width: auto;
	h1 {
		display: inline;
		font-size: 5vw;
		cursor: pointer;
		transition: 0.5s;
		:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	@media screen and (max-width: 1600px) {
		bottom: 10%;
	}
	@media screen and (max-width: 900px) {
		h1 {
			font-size: 3rem !important;
		}
	}
`;

const DetailsBtn = styled.a`
	transition: 0.3s;
	font-size: 1.5rem;
	margin-top: 0.5rem;
	padding: 1rem 0;
	position: relative;
	display: inline-block;
	font-weight: 300;
	@media screen and (max-width: 900px) {
		display: none;
	}
	:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(1);
		height: 1px;
		bottom: -8px;
		left: 0;
		background-color: ${({ theme }) => theme.colors.primary};
		transform-origin: bottom left;
		transition: transform 0.3s ease-out;
	}
	:hover:after {
		transform-origin: bottom right;
		transform: scaleX(0);
	}
	:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const textTransition = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const AnimateDiv = styled.div`
	animation: ${textTransition} 0.7s;
`;

const AnimateContainer = styled.div`
	overflow: hidden;
	display: flex;
`;

const Genres = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 1rem;
`;

const GenreName = styled.span`
	font-size: 1.6rem;
	padding: 0.5rem 0;
	padding-right: 2rem;
	color: ${({ theme }) => theme.colors.secondaryTextColor};
	transition: 0.4s;
	white-space: nowrap;
	font-weight: 300;
	@media screen and (max-width: 900px) {
		font-size: 1.3rem;
	}
	:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const SlideContent = ({ slideContent }: Props) => {
	const router = useRouter();
	const { type } = router.query;
	const [genres, setGenres] = useState([]);
	const filteredGenres = slideContent?.genre_ids && genres.filter((genre) => slideContent.genre_ids?.includes(genre.id));

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`/api/genres/${type || 'all'}`);
			const data = await response.json();
			setGenres(data);
		};

		getData();
	}, []);

	const handleOverview = () => {
		router.push(`/overview/${slideContent.media_type ? slideContent.media_type : type}/${slideContent.id}`);
	};

	const handleGenre = (genreId: number) => {
		router.push(`/genre/${slideContent.media_type}/${genreId}`);
	};

	return (
		<>
			{slideContent && (
				<Content>
					<AnimateContainer>
						<AnimateDiv key={slideContent.id}>
							<h1>{slideContent.title || slideContent.name}</h1>
							<Genres>
								{filteredGenres?.map((genre) => (
									<GenreName key={genre.id} onClick={() => handleGenre(genre.id)}>
										{genre.name}
									</GenreName>
								))}
							</Genres>
						</AnimateDiv>
					</AnimateContainer>
					<Link href={`/overview/${slideContent.media_type}/${slideContent.id}`}>
						<DetailsBtn onClick={() => handleOverview()}>More Details</DetailsBtn>
					</Link>
				</Content>
			)}
		</>
	);
};
