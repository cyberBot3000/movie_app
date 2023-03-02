import React, { useEffect, useState } from 'react';
import { fetchGenres } from 'Shared/api/tmdb';
import { Context, useFetching } from 'Shared/model';
import { FullscreenLoader } from 'Shared/ui/FullscreenLoader';

const withContext = (component) => () => {
	const [genres, setGenres] = useState([]);
	const [contextVal, setContextVal] = useState({});
	const { fetching, isLoading } = useFetching(async () => {
		const response = await fetchGenres();
		setGenres(response.data.genres);
	});
	useEffect(() => {
		fetching();
	}, []);
	useEffect(() => {
		setContextVal({ ...contextVal, genres });
	}, [genres]);
	if (isLoading) {
		return <FullscreenLoader />;
	}
	return (
		<Context.Provider value={contextVal}>{component()}</Context.Provider>
	);
};

export default withContext;
