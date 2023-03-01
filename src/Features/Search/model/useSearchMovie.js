import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { fetchSearchMovies } from 'Shared/api/tmdb';
import { useFetching } from 'Shared/model';

export const useSearchMovie = () => {
	const [searchStr, setSearchStr] = useState('');
	const [queryStr, setQueryString] = useState('');
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState({});
	const setQueryStringDobunced = useCallback(
		debounce(setQueryString, 1000),
		[]
	);

	const { fetching, isLoading, errMessage } = useFetching(async () => {
		const response = await fetchSearchMovies(queryStr, page);
		setMovies(response.data);
	});

	useEffect(() => {
		setQueryStringDobunced(searchStr);
	}, [searchStr]);
	useEffect(() => {
		fetching();
	}, [queryStr, page]);
	useEffect(() => {
		fetching();
	}, []);

	return {
		movies: movies.results || [],
		totalResults: movies.total_results || 0,
		totalPages: movies.total_pages || 0,
		searchStr,
		isLoading,
		errMessage,
		setPage,
		setSearchStr,
	};
};
