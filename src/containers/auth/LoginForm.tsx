import { Button, InputField } from '../../components/index';
import { PasswordInput } from '../../components/index';
import type { LoginFormProps } from '../../interfaces/containers/auth';

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
				error={errors?.email}
				required
			/>

			<PasswordInput
				value={formData.password}
				onChange={onInputChange}
				error={errors?.password}
			/>

			<Button type="submit" isLoading={isPending} loadingText="Logging in...">
				Log in
			</Button>
		</form>
	);
};
