import { Home } from 'Pages/Home';
import { SearchPage } from 'Pages/Search';

import React from 'react';
import { Route, Routes } from 'react-router';

const AppRoutes = () => (
	<Routes>
		<Route element={<Home />} path='/' />
		<Route element={<SearchPage />} path='/search' />
	</Routes>
);

export default AppRoutes;
