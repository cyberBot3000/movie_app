import React, { useEffect, useState } from 'react';
import { fetchGenres } from 'Shared/api/tmdb';
import { Context } from 'Shared/model';

const withContext = (component) => () => {
	const [genres, setGenres] = useState([]);
	const [contextVal, setContextVal] = useState({});
	useEffect(() => {
		fetchGenres().then((resp) => {
			setGenres(resp.data.genres);
		});
	}, []);
	useEffect(() => {
		setContextVal({ ...contextVal, genres });
	}, [genres]);
	return (
		<Context.Provider value={contextVal}>{component()}</Context.Provider>
	);
};

export default withContext;
