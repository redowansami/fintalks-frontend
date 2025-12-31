import React from 'react';
import '../../../styles/HeaderComponents/HeaderLogo.css';

export const HeaderLogo: React.FC = () => {
	return (
		<div className="header-center">
			<a className="logo" href="/">
				FinTalks
			</a>
		</div>
	);
};
