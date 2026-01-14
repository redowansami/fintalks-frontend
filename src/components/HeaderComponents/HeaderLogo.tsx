import React from 'react';
import logo from '/FinTalks_logo.png';
import '../../styles/components/HeaderComponents/HeaderLogo.css';

export const HeaderLogo: React.FC = () => {
	return (
		<a href="/" className="header-logo-link">
			<img src={logo} alt="FinTalks" className="header-logo-image" />
		</a>
	);
};
