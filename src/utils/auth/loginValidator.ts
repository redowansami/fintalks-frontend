export const validateLoginForm = (formData: {
	email: string;
	password: string;
}): Record<string, string> => {
	const newErrors: Record<string, string> = {};

	if (!formData.email.trim()) {
		newErrors.email = 'Email is required';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
		newErrors.email = 'Invalid email format';
	}

	if (!formData.password) {
		newErrors.password = 'Password is required';
	}

	return newErrors;
};
