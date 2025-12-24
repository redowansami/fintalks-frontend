import { Button, PasswordRequirements } from '../components';
import { FormFields } from './FormFields';

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
}: RegisterFormProps) => (
	<form onSubmit={onSubmit} className="register-form">
		<FormFields formData={formData} errors={errors} onInputChange={onInputChange} />
		<PasswordRequirements password={formData.password || ''} />
		<Button type="submit" disabled={loading}>
			{loading ? 'Registering...' : 'Register'}
		</Button>
	</form>
);
