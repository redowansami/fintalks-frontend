import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	disabled = false,
	className = '',
}) => {
	return (
		<button type={type} onClick={onClick} disabled={disabled} className={`button ${className}`}>
			{children}
		</button>
	);
};
