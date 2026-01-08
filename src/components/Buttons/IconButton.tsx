import React from 'react';
import { Icon } from '@iconify/react';

type IconButtonVariant = 'ghost' | 'primary' | 'danger';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string;
	label: string;
	variant?: IconButtonVariant;
	size?: IconButtonSize;
	tooltip?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
	icon,
	label,
	variant = 'ghost',
	size = 'md',
	className = '',
	onClick,
	tooltip,
	...props
}) => {
	const baseStyles =
		'inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

	const variants: Record<IconButtonVariant, string> = {
		ghost: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700',
		primary: 'bg-blue-600 text-white hover:bg-blue-700',
		danger: 'text-red-500 hover:bg-red-50',
	};

	const sizes: Record<IconButtonSize, string> = {
		sm: 'p-1 text-lg',
		md: 'p-2 text-xl',
		lg: 'p-3 text-2xl',
	};

	return (
		<button
			type="button"
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			onClick={onClick}
			aria-label={label}
			title={tooltip || label}
			{...props}
		>
			<Icon icon={icon} />
		</button>
	);
};
