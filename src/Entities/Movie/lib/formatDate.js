import { format } from 'date-fns';

const formatDate = (rawDate) => format(new Date(rawDate), 'MMMM d, y');

export default formatDate;
