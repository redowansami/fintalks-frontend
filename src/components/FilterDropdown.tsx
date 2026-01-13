import React from 'react';
import { Icon } from '@iconify/react';
import { USER_FILTER_OPTIONS, type FilterOption } from '../constants/userFilterConstants';
import { List, ListItem } from './List';
import { Typography } from './Typography';
import { Button } from './Buttons/Button';
import '../styles/components/FilterDropdown.css';
import type { FilterDropdownProps } from '../interfaces/components/FilterDropDown';

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ value, onChange }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleSelect = (selectedValue: FilterOption) => {
		onChange(selectedValue);
		setIsOpen(false);
	};

	const currentLabel = USER_FILTER_OPTIONS.find((opt) => opt.value === value)?.label;

	return (
		<div className="filter-dropdown">
			<Button variant="box" onClick={() => setIsOpen(!isOpen)}>
				<span>{currentLabel}</span>
				<Icon icon="mdi:chevron-down" className="filter-dropdown--icon" />
			</Button>

			{isOpen && (
				<div className="filter-dropdown--menu">
					<List variant="unordered">
						{USER_FILTER_OPTIONS.map((option) => (
							<ListItem key={option.value}>
								<div
									onClick={() => handleSelect(option.value)}
									className={`filter-dropdown--item ${
										value === option.value ? 'active' : ''
									}`}
								>
									<Typography variant="body">{option.label}</Typography>
								</div>
							</ListItem>
						))}
					</List>
				</div>
			)}
		</div>
	);
};
