/* eslint-disable no-unused-vars */
import { Input, Spin, Typography } from 'antd';
import { MoviesList } from 'Entities/Movie';
import { ListPagination, useListPagination } from 'Features/Pagination';
import { useSearchMovie } from 'Features/Search';

import React from 'react';
import { Container } from 'Shared/ui';

import './index.scss';

const { Title, Text } = Typography;

export const SearchPage = () => {
	const {
		searchStr,
		setSearchStr,
		movies,
		setPage,
		totalResults,
		isLoading,
		totalPages,
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
				{isLoading && <Spin />}
				{!isLoading && errMessage && (
					<Text type='danger'>{errMessage}</Text>
				)}
				{!isLoading &&
					!errMessage &&
					totalResults === 0 &&
					searchStr !== '' && (
						<Title level={3} italic>
							your query have no results ((
						</Title>
					)}
				{!isLoading && !errMessage && searchStr === '' && (
					<Title level={3} italic>
						type something!)
					</Title>
				)}
				{!isLoading && !errMessage && (
					<ListPagination
						current={currentPage}
						onChange={pageChangeHandler}
						total={totalResults}
						totalPages={totalPages}
						pageSize={20}
					>
						<MoviesList movies={movies} />
					</ListPagination>
				)}
			</Container>
		</div>
	);
};
