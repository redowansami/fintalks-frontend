import { useState } from 'react';
import { createInputChangeHandler } from '../../utils/auth';
import { validateRegistrationForm } from '../../utils/auth';

interface FormErrors {
	[key: string]: string;
}

interface UseFormReturn {
	formData: {
		username: string;
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
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
		confirmPassword: '',
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const handleInputChange = createInputChangeHandler(setFormData);

	const validateForm = (): boolean => {
		const newErrors = validateRegistrationForm(formData);
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const resetForm = () => {
		setFormData({ username: '', name: '', email: '', password: '', confirmPassword: '' });
		setErrors({});
	};

	return { formData, errors, handleInputChange, validateForm, resetForm };
};
