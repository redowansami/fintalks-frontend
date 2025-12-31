import { InputField, PasswordInput } from '../../../components';
import { REGISTER_FORM_FIELDS } from '../../../constants/RegisterForm';

interface FormFieldsProps {
	formData: Record<string, string>;
	errors: Record<string, string>;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterFormFields = ({ formData, errors, onInputChange }: FormFieldsProps) => (
	<>
		{REGISTER_FORM_FIELDS.map((field) => (
			<InputField
				key={field.id}
				label={field.label}
				id={field.id}
				name={field.name}
				type="text"
				placeholder={field.placeholder}
				value={formData[field.name] || ''}
				onChange={onInputChange}
				required
				error={errors[field.name]}
				validationCriteria={field.validationCriteria}
			/>
		))}

		<PasswordInput
			placeholder="Enter your password"
			value={formData.password || ''}
			onChange={onInputChange}
			error={errors.password}
		/>

		<PasswordInput
			id="confirmPassword"
			name="confirmPassword"
			label="Confirm Password"
			placeholder="Re-enter your password"
			value={formData.confirmPassword || ''}
			onChange={onInputChange}
			error={errors.confirmPassword}
		/>
	</>
);
