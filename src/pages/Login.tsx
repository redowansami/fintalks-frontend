import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, InputField, PageLayout } from '../components';
import { login } from '../services/loginService';

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
		<PageLayout>
			<div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden p-8 sm:p-10">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-serif font-bold text-blue-900">Log in</h2>
				</div>

				{apiError && (
					<div className="mb-4 p-4 bg-red-50 border border-red-300 rounded-md">
						<p className="text-sm text-red-700">{apiError}</p>
					</div>
				)}

				{showResponse && token && (
					<div className="mb-4 p-4 bg-green-50 border border-green-300 rounded-md">
						<p className="text-sm font-semibold text-green-700 mb-3">
							✓ {successMessage}
						</p>
						<div className="bg-white p-3 rounded border border-green-200">
							<p className="text-gray-600 text-xs font-medium mb-2">Token:</p>
							<p className="text-gray-700 text-xs break-all font-mono bg-gray-50 p-2 rounded border border-gray-200">
								{token}
							</p>
						</div>
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-6">
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

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? 'text' : 'password'}
								id="password"
								name="password"
								value={formData.password}
								onChange={handleInputChange}
								required
								className={`appearance-none block w-full px-3 py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm transition-colors ${
									errors.password
										? 'border-red-500 bg-red-50'
										: 'border-gray-300 bg-white'
								}`}
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-blue-900 focus:outline-none"
							>
								{showPassword ? '🙈' : '👁️'}
							</button>
						</div>
						{errors.password && (
							<p className="mt-1 text-sm text-red-600">{errors.password}</p>
						)}
					</div>

					<Button type="submit" disabled={loading}>
						{loading ? 'Logging in...' : 'Log in'}
					</Button>
				</form>

				<div className="mt-8 text-center">
					<p className="text-sm text-gray-700">
						Don't have an account?{' '}
						<a href="/signup" className="font-bold text-blue-900 hover:text-blue-800">
							Sign Up
						</a>
					</p>
				</div>
			</div>
		</PageLayout>
	);
};
