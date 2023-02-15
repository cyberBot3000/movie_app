import { Spin, Typography } from 'antd';
import { MoviesList } from 'Entities/Movie/ui';
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'Shared/api/tmdb';
import { useFetching } from 'Shared/model';
import Container from 'Shared/ui/Contianer';

const Home = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const { fetching, isLoading, errMessage } = useFetching(async () => {
		const response = await fetchTrendingMovies();
		setTrendingMovies(response.data.results);
	});
	useEffect(() => {
		fetching();
	}, []);
	return (
		<div className='homepage'>
			<Container className='homepage__container'>
				{isLoading && <Spin />}
				{errMessage && (
					<Typography.Text type='danger'>
						{errMessage}
					</Typography.Text>
				)}
				{!isLoading && !errMessage && (
					<MoviesList movies={trendingMovies} />
				)}
			</Container>
		</div>
	);
};

export default Home;
