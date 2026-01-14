import type { FilterOption } from '../../constants/userFilterConstants';

export interface UserSearchFilterProps {
	searchValue: string;
	onSearchChange: (value: string) => void;
	filterValue: FilterOption;
	onFilterChange: (value: FilterOption) => void;
}
