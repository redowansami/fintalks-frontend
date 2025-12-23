import { Icon } from '@iconify/react';
import { Button, InputField } from './index';

interface LoginFormProps {
	formData: { email: string; password: string };
	errors: { [key: string]: string };
	loading: boolean;
	showPassword: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	onTogglePassword: () => void;
}

export const LoginForm = ({
	formData,
	errors,
	loading,
	showPassword,
	onInputChange,
	onSubmit,
	onTogglePassword,
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

			<div className="form-group">
				<label className="form-label" htmlFor="password">
					Password
				</label>
				<div className="password-wrapper">
					<input
						type={showPassword ? 'text' : 'password'}
						id="password"
						name="password"
						value={formData.password}
						onChange={onInputChange}
						required
						placeholder="Enter your password"
						className={`form-input ${errors.password ? 'error' : ''}`}
					/>
					<button type="button" onClick={onTogglePassword} className="password-toggle">
						{showPassword ? <Icon icon="el:eye-close" /> : <Icon icon="mdi:eye" />}
					</button>
				</div>
				{errors.password && <p className="error-text">{errors.password}</p>}
			</div>

			<Button type="submit" disabled={loading}>
				{loading ? 'Logging in...' : 'Log in'}
			</Button>
		</form>
	);
};
