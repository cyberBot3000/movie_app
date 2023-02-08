import MovieCard from 'Entities/MovieCard';
import React, { useContext, useEffect, useState } from 'react';
import { fetchTrendingMovies, getFullImagePath } from 'Shared/api/tmdb';
import Context from 'Shared/model';

const MoviesList = () => {
	const [items, setItems] = useState([]);
	const { genres } = useContext(Context);

	useEffect(() => {
		fetchTrendingMovies().then((resp) => {
			setItems(resp.data.results);
		});
	}, []);

	return (
		<div className='movies-list'>
			{items.map((item) => (
				<MovieCard
					header={item.original_title}
					imageUrl={getFullImagePath(item.poster_path, 200)}
					genres={genres.filter((genre) =>
						item.genre_ids.includes(genre.id)
					)}
					rawRealiseDate={item.release_date}
				/>
			))}
		</div>
	);
};

export default MoviesList;
