import { Button, InputField } from '../../components/index';
import { PasswordInput } from '../../components/index';
import { PasswordRequirements } from './PasswordRequirements';
import { REGISTER_FORM_FIELDS } from '../../constants/RegisterForm';
import type { RegisterData } from '../../interfaces/common/auth';
import type { BaseFormProps } from '../../interfaces/components/BaseFormProps';

export const RegisterForm = ({
	formData,
	errors,
	isPending,
	onInputChange,
	onSubmit,
}: BaseFormProps<RegisterData>) => {
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
					error={errors?.[field.name]}
					validationCriteria={field.validationCriteria}
				/>
			))}

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

			<PasswordInput
				id="confirm"
				name="confirmPassword"
				label="Confirm Password"
				value={formData.confirmPassword}
				onChange={onInputChange}
				error={errors?.confirmPassword}
			/>

			<PasswordRequirements password={formData.password} />

			<Button type="submit" isPending={isPending} loadingText="Registering...">
				Register
			</Button>
		</form>
	);
};
