import { Icon } from '@iconify/react';
import { useState } from 'react';

interface PasswordInputProps {
	id: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
}

export const PasswordInput = ({ id, name, value, onChange, error }: PasswordInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="form-group">
			<label className="form-label" htmlFor={id}>
				Password
			</label>
			<div className="password-wrapper">
				<input
					type={showPassword ? 'text' : 'password'}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					required
					className={`form-input ${error ? 'error' : ''}`}
				/>
				<button
					type="button"
					onClick={() => setShowPassword(!showPassword)}
					className="password-toggle"
				>
					{showPassword ? <Icon icon="el:eye-close" /> : <Icon icon="mdi:eye" />}
				</button>
			</div>
			{error && <p className="error-text">{error}</p>}
		</div>
	);
};
