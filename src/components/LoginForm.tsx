import { Button, InputField, PasswordInput } from './index';

interface LoginFormProps {
	formData: { email: string; password: string };
	errors: { [key: string]: string };
	isPending: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
}

export const LoginForm = ({
	formData,
	errors,
	isPending,
	onInputChange,
	onSubmit,
}: LoginFormProps) => {
	return (
		<form onSubmit={onSubmit} className="login-form">
			<InputField
				label="Email address"
				id="email"
				name="email"
				type="email"
				placeholder="john@example.com"
				value={formData.email}
				onChange={onInputChange}
				required
				error={errors.email}
			/>

			<PasswordInput
				id="password"
				name="password"
				value={formData.password}
				onChange={onInputChange}
				error={errors.password}
			/>

			<Button type="submit" disabled={isPending}>
				{isPending ? 'Logging in...' : 'Log in'}
			</Button>
		</form>
	);
};
