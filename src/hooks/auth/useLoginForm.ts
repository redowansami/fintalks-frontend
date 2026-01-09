import { useState } from 'react';
import { createInputChangeHandler } from '../../utils/auth';
import { validateLoginForm } from '../../utils/auth';

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
		const newErrors = validateLoginForm(formData);
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
