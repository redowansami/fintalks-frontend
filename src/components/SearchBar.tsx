import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/components/SearchBar.css';
import type { SearchBarProps } from '../interfaces/components/SearchBar';

export const SearchBar: React.FC<SearchBarProps> = ({
	placeholder = 'Search...',
	value,
	onChange,
	onSearch,
}) => {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && onSearch) {
			onSearch();
		}
	};

	return (
		<div className="search-bar">
			<Icon icon="mdi:magnify" className="search-bar--icon" />
			<input
				type="text"
				className="search-bar--input"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};
