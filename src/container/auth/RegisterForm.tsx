import { Button, InputField } from '../../components/index';
import { PasswordInput } from '../../components/index';
import { PasswordRequirements } from './PasswordRequirements';
import { REGISTER_FORM_FIELDS } from '../../constants/RegisterForm';

interface RegisterFormProps {
	formData: {
		username: string;
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
	};
	errors: {
		email?: string;
		password?: string;
		confirmPassword?: string;
		username?: string;
		name?: string;
		[key: string]: string | undefined;
	};
	isPending: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const RegisterForm = ({
	formData,
	errors,
	isPending,
	onInputChange,
	onSubmit,
}: RegisterFormProps) => {
	return (
		<form onSubmit={onSubmit} className="auth-form">
			{REGISTER_FORM_FIELDS.map((field) => (
				<InputField
					key={field.id}
					label={field.label}
					id={field.id}
					name={field.name}
					type="text"
					placeholder={field.placeholder}
					onChange={onInputChange}
					required
					error={errors[field.name]}
					validationCriteria={field.validationCriteria}
				/>
			))}

			<InputField
				label="Email"
				name="email"
				type="email"
				value={formData.email}
				onChange={onInputChange}
				error={errors.email}
				required
			/>

			<PasswordInput
				value={formData.password}
				onChange={onInputChange}
				error={errors.password}
			/>

			<PasswordInput
				id="confirm"
				name="confirmPassword"
				label="Confirm Password"
				value={formData.confirmPassword}
				onChange={onInputChange}
				error={errors.confirmPassword}
			/>

			<PasswordRequirements password={formData.password} />

			<Button type="submit" isLoading={isPending} loadingText="Registering...">
				Register
			</Button>
		</form>
	);
};
