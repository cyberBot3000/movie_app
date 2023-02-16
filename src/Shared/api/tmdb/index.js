import axios from 'axios';
import getEnvVar from 'Shared/config';

const TMDB_API_URL = getEnvVar('REACT_APP_TMDB_BASE_URL');
const TMDB_API_KEY = getEnvVar('REACT_APP_TMDB_API_KEY');
const TMDB_IMAGES_URL = getEnvVar('REACT_APP_TMDB_IMAGES_URL');

export const fetchGenres = async () => {
	const response = await axios.get(`${TMDB_API_URL}/genre/movie/list`, {
		params: {
			api_key: TMDB_API_KEY,
		},
	});
	return response;
};

export const fetchTrendingMovies = async (page) => {
	const response = await axios.get(`${TMDB_API_URL}/trending/movie/week`, {
		params: {
			api_key: TMDB_API_KEY,
			page,
		},
	});
	return response;
};

export const getFullImagePath = (imageName, width = 200) =>
	`${TMDB_IMAGES_URL}/w${width}/${imageName}`;
