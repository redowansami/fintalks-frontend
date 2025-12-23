export const parseErrorMessage = (msg: string | string[]): string[] => {
	if (Array.isArray(msg)) {
		return msg;
	} else if (typeof msg === 'string') {
		return [msg];
	}
	return [];
};
