import React from 'react';
import './index.scss';

const index = ({ className, children }) => (
	<div className='container-wrapper'>
		<div className={`container ${className}`}>{children}</div>
	</div>
);

export default index;
