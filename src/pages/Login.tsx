import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, InputField, Footer } from '../components';
import { Header } from '../components/Blank_Header';
import { login } from '../services/loginService';
import '../styles/Login.css';

export const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [showResponse, setShowResponse] = useState(false);
	const [token, setToken] = useState<string | null>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setApiError('');
	};

	const validateForm = (): boolean => {
		const newErrors: { [key: string]: string } = {};
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Invalid email format';
		}
		if (!formData.password) {
			newErrors.password = 'Password is required';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setLoading(true);
		try {
			const response = await login(formData);
			setToken(response.token);
			setShowResponse(true);
			setSuccessMessage('Login successful!');
			setTimeout(() => navigate('/'), 2000);
		} catch (error) {
			setApiError(error instanceof Error ? error.message : 'Login failed');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Header />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: 'calc(100vh - 300px)',
					padding: '2rem 1rem',
				}}
			>
				<div className="login-container">
					<div className="login-header">
						<h2>Log in</h2>
					</div>

					{apiError && (
						<div className="error-banner">
							<p>{apiError}</p>
						</div>
					)}

					{showResponse && token && (
						<div className="success-banner">
							<p>✓ {successMessage}</p>
							<div className="token-box">
								<p className="token-label">Token:</p>
								<p className="token-value">{token}</p>
							</div>
						</div>
					)}

					<form onSubmit={handleSubmit} className="login-form">
						<InputField
							label="Email address"
							id="email"
							name="email"
							type="email"
							placeholder="john@example.com"
							value={formData.email}
							onChange={handleInputChange}
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
									onChange={handleInputChange}
									required
									placeholder="Enter your password"
									className={`form-input ${errors.password ? 'error' : ''}`}
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="password-toggle"
								>
									{showPassword ? '🙈' : '👁️'}
								</button>
							</div>
							{errors.password && <p className="error-text">{errors.password}</p>}
						</div>

						<Button type="submit" disabled={loading}>
							{loading ? 'Logging in...' : 'Log in'}
						</Button>
					</form>

					<div className="login-footer">
						<p>
							Don't have an account? <a href="/signup">Sign Up</a>
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
