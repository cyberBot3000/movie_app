import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSitePagination = (onPageChanged = () => {}) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentPage, setCurrentPage] = useState();
	useEffect(() => {
		if (currentPage !== undefined) {
			return;
		}
		const pageFromUrl = searchParams.get('page') || 1;
		setCurrentPage(Number(pageFromUrl));
	}, []);
	const pageChangeHandler = (page) => {
		if (page === currentPage) {
			return;
		}
		setSearchParams({ page }, { replace: true });
		setCurrentPage(page);
		onPageChanged(page);
	};
	return { currentPage, pageChangeHandler };
};
