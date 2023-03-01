import React from 'react';
import { Pagination } from 'antd';
import classes from './index.module.scss';

export const ListPagination = ({
	current,
	total,
	onChange,
	children,
	pageSize,
	mode = 'both',
}) => (
	<div className={classes.pagination}>
		{total > 1 && (mode === 'both' || mode === 'top') && (
			<Pagination
				total={total}
				current={current}
				onChange={onChange}
				showSizeChanger={false}
				pageSize={pageSize}
			/>
		)}
		{children}
		{total > 1 && (mode === 'both' || mode === 'bottom') && (
			<Pagination
				total={total}
				current={current}
				onChange={onChange}
				showSizeChanger={false}
				pageSize={pageSize}
			/>
		)}
	</div>
);
