import React, { useContext } from 'react';
import { getFullImagePath } from 'Shared/api/tmdb';
import { Context } from 'Shared/model';
import MovieCard from '../Card';
import './index.scss';

const MoviesList = ({ movies }) => {
	const { genres } = useContext(Context);
	return (
		<div className='movies-list'>
			{movies.map((movie) => (
				<MovieCard
					header={movie.original_title}
					imageUrl={getFullImagePath(movie.poster_path, 200)}
					genres={genres.filter((genre) =>
						movie.genre_ids.includes(genre.id)
					)}
					rawRealiseDate={movie.release_date}
				/>
			))}
		</div>
	);
};

export default MoviesList;
