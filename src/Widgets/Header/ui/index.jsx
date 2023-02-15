import { PageNav } from 'Features/PageNav';
import { usePageNav } from 'Features/PageNav/model/usePageNav';
import React from 'react';
import Container from 'Shared/ui/Contianer';
import Logo from 'Shared/ui/Logo/Logo';
import { items } from '../const';
import './index.scss';

const Header = () => {
	const { current, changeSelectedItem } = usePageNav(items[0].key);
	return (
		<div className='header'>
			<Container className='header__container'>
				<Logo />
				<PageNav
					items={items}
					defaultSelectedKey={current}
					onClick={changeSelectedItem}
				/>
			</Container>
		</div>
	);
};

export default Header;
