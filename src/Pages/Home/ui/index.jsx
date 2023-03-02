import { Spin, Typography } from 'antd';

import React from 'react';
import { ListPagination, useListPagination } from 'Features/Pagination';
import { MoviesList, useTrendingMovies } from 'Entities/Movie';

import './index.scss';
import { Container } from 'Shared/ui';

export const Home = () => {
	const { currentPage, pageChangeHandler } = useListPagination();
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
							<ListPagination
								current={currentPage}
								total={allTrendingMovies.total_results}
								totalPages={allTrendingMovies.total_pages}
								onChange={pageChangeHandler}
								pageSize={20}
							>
								<MoviesList
									movies={allTrendingMovies.results}
								/>
							</ListPagination>
						)}
					</main>
				)}
			</Container>
		</div>
	);
};
