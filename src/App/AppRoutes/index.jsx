import Home from 'Pages/Home';
import Login from 'Pages/Login';
import React from 'react';
import { Route, Routes } from 'react-router';

const AppRoutes = () => (
	<Routes>
		<Route element={<Home />} path='/' />
		<Route element={<Login />} path='/login' />
	</Routes>
);

export default AppRoutes;
