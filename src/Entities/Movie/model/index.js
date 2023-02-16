const { useState, useEffect } = require('react');
const { fetchTrendingMovies } = require('Shared/api/tmdb');
const { useFetching } = require('Shared/model');

export const useTrendingMovies = (page) => {
	const [allTrendingMovies, setAllTrendingMovies] = useState({});
	const { fetching, isLoading, errMessage } = useFetching(async () => {
		const response = await fetchTrendingMovies(page);
		if (response.status > 399) {
			throw new Error(`fetching failed with status ${response.status}`);
		}
		setAllTrendingMovies(response.data);
		return response;
	});
	useEffect(() => {
		fetching();
	}, [page]);
	return { allTrendingMovies, isLoading, errMessage };
};
