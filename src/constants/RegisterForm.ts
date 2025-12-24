export interface FormFieldConfig {
	label: string;
	id: string;
	name: string;
	type?: string;
	placeholder: string;
	validationCriteria?: string[];
}

export const REGISTER_FORM_FIELDS: FormFieldConfig[] = [
	{
		label: 'Username',
		id: 'username',
		name: 'username',
		placeholder: 'john_doe',
		validationCriteria: ['3-10 characters long', 'Letters, numbers, and underscores only'],
	},
	{
		label: 'Name',
		id: 'name',
		name: 'name',
		placeholder: 'John Doe',
		validationCriteria: ['3-20 characters long'],
	},
	{
		label: 'Email address',
		id: 'email',
		name: 'email',
		type: 'email',
		placeholder: 'john@example.com',
		validationCriteria: ['Valid email format (e.g., user@domain.com)'],
	},
];
