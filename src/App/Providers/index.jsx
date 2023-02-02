import compose from 'compose-function';
import withRoutes from './withRouter';

const withProviders = compose(withRoutes);
export default withProviders;
