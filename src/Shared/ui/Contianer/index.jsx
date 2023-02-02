import React from 'react';
import './index.scss';

const index = ({ className, children }) => (
	<div className={`container ${className}`}>{children}</div>
);

export default index;
