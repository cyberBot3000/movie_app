import { PageNav } from 'Features/PageNav';
import { usePageNav } from 'Features/PageNav/model/usePageNav';
import React from 'react';
import { Container, Logo } from 'Shared/ui';

import { items } from '../const';
import './index.scss';

const Header = () => {
	const { current, changeSelectedItem } = usePageNav();
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
