import { useState } from 'react';
import { Button, InputField } from '../../components/index';
import { PasswordInput } from '../../components/index';
import { PasswordRequirements } from './PasswordRequirements';
import { REGISTER_FORM_FIELDS } from '../../constants/RegisterForm';
import type { BaseFormProps } from '../../interfaces/components/BaseFormProps';
import type { RegisterFormData } from '../../interfaces/containers/auth';

export const RegisterForm = ({
	formData,
	errors,
	isPending,
	onInputChange,
	onSubmit,
}: BaseFormProps<RegisterFormData>) => {
	const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);

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
				onFocus={() => setShowPasswordRequirements(true)}
				onBlur={() => setShowPasswordRequirements(false)}
			/>

			{showPasswordRequirements && (
				<>
					<div
						className="password-requirements-backdrop"
						onClick={() => setShowPasswordRequirements(false)}
					/>
					<PasswordRequirements password={formData.password} />
				</>
			)}

			<PasswordInput
				id="confirm"
				name="confirmPassword"
				label="Confirm Password"
				value={formData.confirmPassword}
				onChange={onInputChange}
				error={errors?.confirmPassword}
			/>

			<Button
				type="submit"
				className="mt-4"
				isPending={isPending}
				loadingText="Registering..."
			>
				Register
			</Button>
		</form>
	);
};
