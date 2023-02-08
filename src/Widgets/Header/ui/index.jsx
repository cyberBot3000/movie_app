import PageNav from 'Features/PageNav';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'Shared/ui/Contianer';
import Logo from 'Shared/ui/Logo/Logo';
import './index.scss';

const items = [
	{
		label: <Link to='/'>Home</Link>,
		key: 1,
	},
	{
		label: <Link to='/login'>Login</Link>,
		key: 2,
	},
];

const Header = () => (
	<div className='header'>
		<Container className='header__container'>
			<Logo />
			<PageNav items={items} />
		</Container>
	</div>
);

export default Header;
