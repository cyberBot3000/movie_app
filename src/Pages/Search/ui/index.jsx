/* eslint-disable no-unused-vars */
import { Input, Pagination } from 'antd';
import { MoviesList } from 'Entities/Movie';
import { useSitePagination } from 'Features/Pagination';
import { useSearchMovie } from 'Features/Search';

import React from 'react';
import { Container } from 'Shared/ui';

import './index.scss';

export const SearchPage = () => {
	const { setSearchStr, movies, setPage, totalResults, totalPages } =
		useSearchMovie();
	const { currentPage, pageChangeHandler } = useSitePagination(setPage);
	return (
		<div className='search-page'>
			<Container className='search-page__container'>
				<Input.Search
					onInput={(e) => {
						setSearchStr(e.target.value);
					}}
				/>
				{totalPages > 1 && (
					<Pagination
						current={currentPage}
						onChange={pageChangeHandler}
						showSizeChanger={false}
						total={totalResults}
					/>
				)}
				<MoviesList movies={movies} />
				{totalPages > 1 && (
					<Pagination
						current={currentPage}
						onChange={pageChangeHandler}
						showSizeChanger={false}
						total={totalResults}
					/>
				)}
			</Container>
		</div>
	);
};
