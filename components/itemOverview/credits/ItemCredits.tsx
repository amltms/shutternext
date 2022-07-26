import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Credits } from '../../../types';
import { CreditsProfile } from './CreditsProfile';

interface Props {
	credits: Credits;
}

const CastContainer = styled.div``;

const CastList = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

const filterByJob = (credits: Credits, job: string) => {
	return credits.crew?.filter((person) => person.job === job);
};

export const ItemCredits = ({ credits }: Props) => {
	const [writers, setWriters] = useState(filterByJob(credits, 'Writer'));
	const [director, setDirector] = useState(credits.crew && filterByJob(credits, 'Director')[0]);

	useEffect(() => {
		if (director && writers.some((e) => e.id === director.id)) {
			setDirector({ ...director, job: 'Director / Writer' });
			setWriters(writers.filter((writer) => writer.id !== director.id));
		}
	}, [director, writers]);

	return (
		<CastContainer>
			<p>Cast</p>
			<CastList>
				{credits.cast?.slice(0, 3).map((person, i) => (
					<CreditsProfile key={i} person={person} />
				))}
			</CastList>
			{director && (
				<>
					<p>Crew</p>
					<CastList>
						<CreditsProfile person={director} />

						{writers.map((w, i) => (
							<CreditsProfile key={i} person={w} />
						))}
					</CastList>
				</>
			)}
		</CastContainer>
	);
};
