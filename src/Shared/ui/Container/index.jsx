import React from 'react';
import './index.scss';

export const Container = ({ className, children }) => (
	<div className='container-wrapper'>
		<div className={`container ${className}`}>{children}</div>
	</div>
);
