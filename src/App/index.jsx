import React from 'react';
import Header from 'Widgets/Header';
import AppRoutes from './AppRoutes';
import './index.scss';
import withProviders from './Providers';

const App = () => (
	<>
		<Header />
		<AppRoutes />
	</>
);

export default withProviders(App);
