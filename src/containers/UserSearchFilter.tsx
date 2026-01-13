import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { FilterDropdown } from '../components/FilterDropdown';
import '../styles/containers/UserSearchFilter.css';
import type { UserSearchFilterProps } from '../interfaces/containers/searchFilter';

export const UserSearchFilter: React.FC<UserSearchFilterProps> = ({
	searchValue,
	onSearchChange,
	filterValue,
	onFilterChange,
}) => {
	return (
		<div className="user-search-filter">
			<SearchBar
				placeholder="Search users..."
				value={searchValue}
				onChange={onSearchChange}
			/>
			<FilterDropdown value={filterValue} onChange={onFilterChange} />
		</div>
	);
};
