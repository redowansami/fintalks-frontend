export type FilterOption = 'username' | 'name' | 'email';

export const USER_FILTER_OPTIONS: { label: string; value: FilterOption }[] = [
	{ label: 'Username', value: 'username' },
	{ label: 'Name', value: 'name' },
	{ label: 'Email', value: 'email' },
];

export const DEFAULT_USER_FILTER: FilterOption = 'username';
