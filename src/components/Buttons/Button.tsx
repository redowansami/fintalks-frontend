import React from 'react';
import '../../styles/Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	isLoading?: boolean;
	loadingText?: string;
	disabled?: boolean;
	className?: string;
	variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	isLoading = false,
	loadingText = '',
	disabled = false,
	className = '',
	variant = 'primary',
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled || isLoading}
			className={`btn-base btn--${variant} ${className}`}
		>
			{isLoading ? loadingText || children : children}
		</button>
	);
};
