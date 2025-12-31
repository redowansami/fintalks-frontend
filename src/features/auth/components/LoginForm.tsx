import { Button, InputField } from '../../../components';
import { PasswordInput } from './PasswordInput';
import type { LoginFormProps } from '../types';

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
