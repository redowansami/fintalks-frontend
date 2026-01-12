import React from 'react';
import logo from '../../../public/FinTalks_logo.png';

export const HeaderLogo: React.FC = () => {
	return (
		<a href="/" className="flex-none flex justify-center px-4">
			<img src={logo} alt="FinTalks" className="h-10 md:h-14 w-auto" />
		</a>
	);
};
