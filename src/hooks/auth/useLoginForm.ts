import { useState } from 'react';
import { createInputChangeHandler } from '../../utils/auth';
import { validateLoginForm } from '../../utils/auth';
import type { LoginData } from '../../interfaces/common/auth';
import type { UseLoginFormReturn } from '../../interfaces/hooks/auth';

export const useLoginForm = (): UseLoginFormReturn => {
	const [formData, setFormData] = useState<LoginData>({ email: '', password: '' });
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
