import React from 'react';

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
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
		>
			{children}
		</button>
	);
};
