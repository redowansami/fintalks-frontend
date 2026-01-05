import { Button, InputField } from '../../../components';
import { PasswordInput } from '../../../components';

interface LoginFormProps {
	formData: {
		email: string;
		password: string;
	};
	errors: {
		email?: string;
		password?: string;
		[key: string]: string | undefined;
	};
	isPending: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm = ({
	formData,
	errors,
	isPending,
	onInputChange,
	onSubmit,
}: LoginFormProps) => {
	return (
		<form onSubmit={onSubmit} className="auth-form">
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

			<Button type="submit" isLoading={isPending} loadingText="Logging in...">
				Log in
			</Button>
		</form>
	);
};
