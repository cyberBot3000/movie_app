import { format } from 'date-fns';

const formatDate = (rawDate) => {
	return format(new Date(rawDate).getTime(), 'MMMM d, y');
};

export default formatDate;
