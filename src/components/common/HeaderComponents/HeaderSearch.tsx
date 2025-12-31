import React from 'react';
import { Icon } from '@iconify/react';
import '../../../styles/HeaderComponents/HeaderSearch.css';

export const HeaderSearch: React.FC = () => {
	return (
		<div className="header-left">
			<button className="icon-button" aria-label="Search">
				<Icon icon="material-symbols:search" />
			</button>
			<span className="header-tagline">The Finance Voice</span>
		</div>
	);
};
