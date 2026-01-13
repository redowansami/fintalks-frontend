import type { FilterOption } from '../../constants/userFilterConstants';

export interface FilterDropdownProps {
	value: FilterOption;
	onChange: (value: FilterOption) => void;
}
