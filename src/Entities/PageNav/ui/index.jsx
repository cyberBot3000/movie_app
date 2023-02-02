import { Menu } from 'antd';
import React from 'react';
import './index.scss';

const PageNav = ({ items }) => (
	<Menu items={items} mode='horizontal' className='header-menu' />
);

export default PageNav;
