import { useState } from 'react';
import { Button, InputField, PasswordRequirements, Footer, Modal } from '../components';
import { Header } from '../components/Blank_Header';
import { useForm } from '../hooks/useForm';
import { signUp } from '../services/authService';
import '../styles/Register.css';

export const Register = () => {
	const { formData, errors, setFormData, validateForm, resetForm } = useForm();
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

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
			setShowSuccessModal(true);
		} catch (error) {
			setApiError(error instanceof Error ? error.message : 'Registration failed');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Header />
			<Modal
				isOpen={showSuccessModal}
				onClose={() => setShowSuccessModal(false)}
				message="The registration email was sent successfully, check your email address"
				actionButtonText="OK"
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,
					padding: '2rem 1rem',
					minHeight: 'auto',
					backgroundColor: 'white',
					width: '100%',
				}}
			>
				<div className="register-container">
					<div className="register-header">
						<h2>Register</h2>
						<p>Create your account to join the conversation</p>
					</div>

					{apiError && (
						<div className="error-banner">
							<p>{apiError}</p>
						</div>
					)}

					<form onSubmit={handleSubmit} className="register-form">
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

							<PasswordRequirements password={formData.password} />
						</div>

						<Button type="submit" disabled={loading}>
							{loading ? 'Registering...' : 'Register'}
						</Button>
					</form>

					<div className="register-footer">
						<p>
							Already have an account? <a href="/login">Log in</a>
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
