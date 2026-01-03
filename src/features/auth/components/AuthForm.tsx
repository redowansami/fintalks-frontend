import { InputField } from '../../../components';
import { PasswordInput } from '../../../components';
import { PasswordRequirements } from './PasswordRequirements';
import { AuthSubmitButton } from './AuthSubmitButton';
import { REGISTER_FORM_FIELDS } from '../../../constants/RegisterForm';

interface AuthFormProps {
	mode: 'login' | 'register';
	formData: {
		username?: string;
		name?: string;
		email: string;
		password: string;
		confirmPassword?: string;
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

export const AuthForm = ({
	mode,
	formData,
	errors,
	isPending,
	onInputChange,
	onSubmit,
}: AuthFormProps) => {
	const isReg = mode === 'register';
	return (
		<form onSubmit={onSubmit} className="auth-form">
			{isReg && (
				<>
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
				</>
			)}

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

			{isReg && (
				<>
					<PasswordInput
						id="confirm"
						name="confirmPassword"
						label="Confirm Password"
						value={formData.confirmPassword}
						onChange={onInputChange}
						error={errors.confirmPassword}
					/>
					<PasswordRequirements password={formData.password} />
				</>
			)}

			<AuthSubmitButton
				isPending={isPending}
				label={isReg ? 'Register' : 'Log in'}
				pendingLabel={isReg ? 'Registering...' : 'Logging in...'}
			/>
		</form>
	);
};
