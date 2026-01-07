import { useState } from 'react';
import { InputField } from './InputField';
import { PasswordToggleButton } from './Buttons/PasswordToggleButton';
import type { PasswordInputProps } from '../types/components/passwordInputProps';

export const PasswordInput = ({
	id = 'password',
	name = 'password',
	value,
	onChange,
	error,
	placeholder = '********',
	label = 'Password',
	...rest
}: PasswordInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<InputField
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			error={error}
			placeholder={placeholder}
			label={label}
			{...rest}
			type={showPassword ? 'text' : 'password'}
			rightElement={
				<PasswordToggleButton
					showPassword={showPassword}
					onChange={() => setShowPassword(!showPassword)}
				/>
			}
		/>
	);
};
