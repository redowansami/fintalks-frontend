import { InputField, Button, PasswordRequirements, PasswordInput } from '../components';

interface FormFieldConfig {
	label: string;
	id: string;
	name: string;
	type?: string;
	placeholder: string;
}

interface RegisterFormProps {
	formData: Record<string, string>;
	errors: Record<string, string>;
	loading: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
}

const FORM_FIELDS: FormFieldConfig[] = [
	{
		label: 'Username',
		id: 'username',
		name: 'username',
		placeholder: 'johndoe',
	},
	{
		label: 'Name',
		id: 'name',
		name: 'name',
		placeholder: 'John Doe',
	},
	{
		label: 'Email address',
		id: 'email',
		name: 'email',
		type: 'email',
		placeholder: 'john@example.com',
	},
];

export const RegisterForm = ({
	formData,
	errors,
	loading,
	onInputChange,
	onSubmit,
}: RegisterFormProps) => (
	<form onSubmit={onSubmit} className="register-form">
		{FORM_FIELDS.map((field) => (
			<InputField
				key={field.id}
				label={field.label}
				id={field.id}
				name={field.name}
				type={field.type || 'text'}
				placeholder={field.placeholder}
				value={formData[field.name] || ''}
				onChange={onInputChange}
				required
				error={errors[field.name]}
			/>
		))}

		<PasswordInput
			id="password"
			name="password"
			value={formData.password || ''}
			onChange={onInputChange}
			error={errors.password}
		/>

		<PasswordRequirements password={formData.password || ''} />

		<Button type="submit" disabled={loading}>
			{loading ? 'Registering...' : 'Register'}
		</Button>
	</form>
);
