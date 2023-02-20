import { Pagination, Spin, Typography } from 'antd';

import React from 'react';
import { useSitePagination } from 'Features/Pagination';
import { MoviesList, useTrendingMovies } from 'Entities/Movie';

import './index.scss';
import { Container } from 'Shared/ui';

export const Home = () => {
	const { currentPage, pageChangeHandler } = useSitePagination();
	const { allTrendingMovies, isLoading, errMessage } =
		useTrendingMovies(currentPage);
	return (
		<div className='homepage'>
			<Container className='homepage__container'>
				{errMessage && (
					<Typography.Text type='danger'>
						{errMessage}
					</Typography.Text>
				)}
				{!errMessage && (
					<main className='homepage__main'>
						{isLoading && <Spin />}
						{!isLoading && (
							<>
								<Pagination
									current={currentPage}
									total={allTrendingMovies.total_pages}
									onChange={pageChangeHandler}
									pageSize={20}
									showSizeChanger={false}
								/>
								<MoviesList
									movies={allTrendingMovies.results}
								/>
								<Pagination
									current={currentPage}
									total={allTrendingMovies.total_pages}
									onChange={pageChangeHandler}
									pageSize={20}
									showSizeChanger={false}
								/>
							</>
						)}
					</main>
				)}
			</Container>
		</div>
	);
};
