export const getPasswordChecks = (password: string) => ({
	lowercase: /[a-z]/.test(password),
	digit: /\d/.test(password),
	uppercase: /[A-Z]/.test(password),
	special: /[!@#$%^&*]/.test(password),
	length: password.length >= 8,
});

export const checkPasswordRequirements = (password: string): boolean => {
	const checks = getPasswordChecks(password);
	return Object.values(checks).every((check) => check);
};
