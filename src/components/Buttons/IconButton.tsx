import React from 'react';
import { Icon } from '@iconify/react';
import '../../styles/components/Buttons/IconButton.css';

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
	return (
		<button
			type="button"
			className={`icon-button icon-button--${variant} icon-button--${size} ${className}`}
			onClick={onClick}
			aria-label={label}
			title={tooltip || label}
			{...props}
		>
			<Icon icon={icon} />
		</button>
	);
};
