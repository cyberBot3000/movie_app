import { Menu } from 'antd';
import React from 'react';
import './index.scss';

export const PageNav = ({ items, defaultSelectedKey, onClick }) => (
	<Menu
		items={items}
		mode='horizontal'
		className='header-menu'
		selectedKeys={[defaultSelectedKey]}
		onClick={onClick}
	/>
);
