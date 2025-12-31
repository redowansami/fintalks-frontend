export const formatStoryDate = (dateString: string): string => {
	const isoString = dateString.replace(' ', 'T');
	const dateObj = new Date(isoString);

	return new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(dateObj);
};
