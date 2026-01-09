import { useState } from 'react';
import { InputField } from './InputField';
import { IconButton } from './Buttons/IconButton';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
}

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
				<IconButton
					icon={showPassword ? 'mdi:eye' : 'el:eye-close'}
					label="Toggle password visibility"
					onClick={() => setShowPassword(!showPassword)}
					variant="ghost"
					size="sm"
				/>
			}
		/>
	);
};
