import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../Buttons/IconButton';
import '../../styles/components/HeaderComponents/HeaderSearch.css';

export const HeaderSearch: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="header-left">
			<IconButton
				icon="material-symbols:search"
				label="Search"
				tooltip="Search stories"
				onClick={() => navigate('/stories/search')}
			/>
			<span className="header-tagline">The Finance Voice</span>
		</div>
	);
};
