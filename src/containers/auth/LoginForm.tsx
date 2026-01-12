import { Button, InputField } from '../../components/index';
import { PasswordInput } from '../../components/index';
import type { BaseFormProps } from '../../interfaces/components/BaseFormProps';
import type { LoginData } from '../../interfaces/common/auth';

export const LoginForm = ({
	formData,
	errors,
	isPending,
	onInputChange,
	onSubmit,
}: BaseFormProps<LoginData>) => {
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

			<Button type="submit" isPending={isPending} loadingText="Logging in...">
				Log in
			</Button>
		</form>
	);
};
