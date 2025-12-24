export const validateRegistrationForm = (formData: {
	username: string;
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}): Record<string, string> => {
	const newErrors: Record<string, string> = {};

	if (formData.username.trim().length < 3 || formData.username.trim().length > 10) {
		newErrors.username = 'Username must be between 3-10 characters';
	} else if (!/^[a-zA-Z0-9_]+$/.test(formData.username.trim())) {
		newErrors.username = 'Username can only contain letters, numbers, and underscores';
	}
	if (formData.name.trim().length < 3 || formData.name.trim().length > 20) {
		newErrors.name = 'Name must be between 3-20 characters';
	}
	if (!formData.email.trim()) {
		newErrors.email = 'Email is required';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
		newErrors.email = 'Invalid email format';
	}
	if (!formData.password) {
		newErrors.password = 'Password is required';
	} else if (formData.password.length < 8) {
		newErrors.password = 'Password must be at least 8 characters';
	}
	if (!formData.confirmPassword) {
		newErrors.confirmPassword = 'Please confirm your password';
	} else if (formData.password !== formData.confirmPassword) {
		newErrors.confirmPassword = 'Passwords do not match';
	}

	return newErrors;
};
