import { useState } from 'react';

const useFetching = (fetchCb) => {
	const [isLoading, setIsloading] = useState(true);
	const [errMessage, setErrMessage] = useState('');
	const fetching = async () => {
		try {
			setIsloading(true);
			await fetchCb();
		} catch (err) {
			setErrMessage(err.message);
		} finally {
			setIsloading(false);
		}
	};
	return { fetching, isLoading, errMessage };
};

export default useFetching;
