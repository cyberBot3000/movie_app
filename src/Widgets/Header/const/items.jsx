import { Link } from 'react-router-dom';
import React from 'react';

export const items = [
	{
		label: <Link to='/'>Home</Link>,
		key: 'home',
	},
	{
		label: <Link to='/login'>Login</Link>,
		key: 'login',
	},
];