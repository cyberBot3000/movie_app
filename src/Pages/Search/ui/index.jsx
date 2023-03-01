/* eslint-disable no-unused-vars */
import { Input } from 'antd';
import { MoviesList } from 'Entities/Movie';
import { ListPagination, useListPagination } from 'Features/Pagination';
import { useSearchMovie } from 'Features/Search';

import React from 'react';
import { Container } from 'Shared/ui';

import './index.scss';

export const SearchPage = () => {
	const {
		setSearchStr,
		movies,
		setPage,
		totalResults,
		totalPages,
		isLoading,
		errMessage,
	} = useSearchMovie();
	const { currentPage, pageChangeHandler } = useListPagination(setPage);
	return (
		<div className='search-page'>
			<Container className='search-page__container'>
				<Input.Search
					onInput={(e) => {
						setSearchStr(e.target.value);
					}}
				/>
				{totalPages > 1 && !isLoading && (
					<ListPagination
						current={currentPage}
						onChange={pageChangeHandler}
						total={totalResults}
						pageSize={20}
					>
						<MoviesList movies={movies} />
					</ListPagination>
				)}
			</Container>
		</div>
	);
};
