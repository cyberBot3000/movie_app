import { NavLink } from 'react-router-dom';
import React from 'react';

export const items = [
	{
		label: (
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? 'navlink-active' : '')}
			>
				Home
			</NavLink>
		),
		key: '/',
	},
	{
		label: (
			<NavLink
				to='/search'
				className={({ isActive }) => (isActive ? 'navlink-active' : '')}
			>
				Search
			</NavLink>
		),
		key: '/search',
	},
];
