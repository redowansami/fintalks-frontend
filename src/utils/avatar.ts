export const AVATAR_COLORS = [
	'#4A90E2',
	'#7ED321',
	'#F5A623',
	'#BD10E0',
	'#50E3C2',
	'#D0021B',
	'#F8E71C',
	'#417505',
];

export const getAvatarInitials = (name: string): string => {
	return name
		.split(' ')
		.map((word) => word[0])
		.join('')
		.toUpperCase()
		.slice(0, 2);
};

export const getAvatarColor = (userId: string): string => {
	const hashCode = userId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return AVATAR_COLORS[hashCode % AVATAR_COLORS.length];
};
