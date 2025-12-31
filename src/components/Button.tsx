import React from 'react';
import '../styles/Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	className?: string;
	variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	disabled = false,
	className = '',
	variant = 'primary',
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`button button--${variant} ${className}`}
		>
			{children}
		</button>
	);
};
