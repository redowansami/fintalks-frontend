import { useState } from 'react';

interface FormErrors {
	[key: string]: string;
}

interface UseFormReturn {
	formData: {
		username: string;
		name: string;
		email: string;
		password: string;
	};
	errors: FormErrors;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	validateForm: () => boolean;
	resetForm: () => void;
}

export const useForm = (): UseFormReturn => {
	const [formData, setFormData] = useState({
		username: '',
		name: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<FormErrors>({});

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.username.trim()) {
			newErrors.username = 'Username is required';
		}
		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
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

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const resetForm = () => {
		setFormData({ username: '', name: '', email: '', password: '' });
		setErrors({});
	};

	return { formData, errors, handleInputChange, validateForm, resetForm };
};
