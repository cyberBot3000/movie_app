import compose from 'compose-function';
import withRoutes from './withRouter';
import withContext from './withContext';

const withProviders = compose(withRoutes, withContext);
export default withProviders;
