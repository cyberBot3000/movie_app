import { useState } from 'react';
import { useLocation } from 'react-router';

export const usePageNav = () => {
	const location = useLocation();
	const [current, setCurrent] = useState(location.pathname);
	const changeSelectedItem = (e) => {
		setCurrent(e.key);
	};
	return { current, changeSelectedItem };
};
