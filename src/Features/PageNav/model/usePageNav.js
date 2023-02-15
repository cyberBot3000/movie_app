import { useState } from 'react';

export const usePageNav = (defaultSelectedItem) => {
	const [current, setCurrent] = useState(defaultSelectedItem);
	const changeSelectedItem = (e) => {
		setCurrent(e.key);
	};
	return { current, changeSelectedItem };
};
