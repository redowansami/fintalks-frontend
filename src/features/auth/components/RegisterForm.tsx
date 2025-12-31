import { Button } from '../../../components';
import { PasswordRequirements } from './PasswordRequirements';
import { RegisterFormFields } from './RegisterFormFields';
import { checkPasswordRequirements } from '../utils';

interface RegisterFormProps {
	formData: Record<string, string>;
	errors: Record<string, string>;
	loading: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
}

export const RegisterForm = ({
	formData,
	errors,
	loading,
	onInputChange,
	onSubmit,
}: RegisterFormProps) => {
	const isPasswordValid = checkPasswordRequirements(formData.password || '');
	const isPasswordMatch =
		formData.password === formData.confirmPassword && formData.confirmPassword !== '';
	const isButtonDisabled = loading || !isPasswordValid || !isPasswordMatch;

	return (
		<form onSubmit={onSubmit} className="register-form">
			<RegisterFormFields formData={formData} errors={errors} onInputChange={onInputChange} />
			<PasswordRequirements password={formData.password || ''} />
			<Button type="submit" disabled={isButtonDisabled}>
				{loading ? 'Registering...' : 'Register'}
			</Button>
		</form>
	);
};
