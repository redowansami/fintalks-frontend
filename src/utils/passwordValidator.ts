export const checkPasswordRequirements = (password: string): boolean => {
	const checks = {
		lowercase: /[a-z]/.test(password),
		digit: /\d/.test(password),
		uppercase: /[A-Z]/.test(password),
		special: /[!@#$%^&*]/.test(password),
		length: password.length >= 8,
	};

	return Object.values(checks).every((check) => check);
};
