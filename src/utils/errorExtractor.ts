export const extractValidationErrors = (
	error: Error | null,
): Record<string, string | string[]> | undefined => {
	if (!error || !('validationErrors' in error)) {
		return undefined;
	}
	return error.validationErrors as Record<string, string | string[]>;
};
