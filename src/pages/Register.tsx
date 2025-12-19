import { useState } from 'react';
import { Button, InputField, PasswordRequirements, PageLayout } from '../components';
import { useForm } from '../hooks/useForm';
import { signUp } from '../services/authService';

export const Register = () => {
	const { formData, errors, setFormData, validateForm, resetForm } = useForm();
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setApiError('');
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setLoading(true);
		try {
			await signUp(formData);
			resetForm();
			alert('Registration successful! Please log in.');
		} catch (error) {
			setApiError(error instanceof Error ? error.message : 'Registration failed');
		} finally {
			setLoading(false);
		}
	};

	return (
		<PageLayout>
			<div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden p-8 sm:p-10">
				<div className="text-center mb-6">
					<h2 className="text-3xl font-serif font-bold text-blue-900">Register</h2>
					<p className="mt-2 text-sm text-gray-600">
						Create your account to join the conversation
					</p>
				</div>

				{apiError && (
					<div className="mb-4 p-4 bg-red-50 border border-red-300 rounded-md">
						<p className="text-sm text-red-700">{apiError}</p>
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-5">
					<InputField
						label="Username"
						id="username"
						name="username"
						placeholder="johndoe"
						value={formData.username}
						onChange={handleInputChange}
						required
						error={errors.username}
					/>

					<InputField
						label="Name"
						id="name"
						name="name"
						placeholder="John Doe"
						value={formData.name}
						onChange={handleInputChange}
						required
						error={errors.name}
					/>

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

						<PasswordRequirements password={formData.password} />
					</div>

					<Button type="submit" disabled={loading}>
						{loading ? 'Registering...' : 'Register'}
					</Button>
				</form>

				<div className="mt-8 text-center">
					<p className="text-sm text-gray-700">
						Already have an account?{' '}
						<a href="/login" className="font-bold text-blue-900 hover:text-blue-800">
							Log in
						</a>
					</p>
				</div>
			</div>
		</PageLayout>
	);
};
