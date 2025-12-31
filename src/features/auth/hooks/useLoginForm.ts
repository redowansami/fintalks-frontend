import { useState } from 'react';
import { createInputChangeHandler } from '../utils';

interface LoginFormData {
	email: string;
	password: string;
}

interface UseLoginFormReturn {
	formData: LoginFormData;
	errors: { [key: string]: string };
	showPassword: boolean;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	validateForm: () => boolean;
	togglePasswordVisibility: () => void;
}

export const useLoginForm = (): UseLoginFormReturn => {
	const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [showPassword, setShowPassword] = useState(false);
	const handleInputChange = createInputChangeHandler(setFormData);

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

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return {
		formData,
		errors,
		showPassword,
		handleInputChange,
		validateForm,
		togglePasswordVisibility,
	};
};
