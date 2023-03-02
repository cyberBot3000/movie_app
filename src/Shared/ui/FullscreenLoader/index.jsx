import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

import './index.scss';

const LoadingIcon = <LoadingOutlined style={{ fontSize: '200px' }} />;

export const FullscreenLoader = () => (
	<div className='fullscreen-loader'>
		<Spin indicator={LoadingIcon} />
	</div>
);
