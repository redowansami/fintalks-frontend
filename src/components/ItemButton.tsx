import React from 'react';
import '../styles/ItemButton.css';

type ItemButtonVariant = 'default' | 'danger';

interface ItemButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	className?: string;
	variant?: ItemButtonVariant;
}

export const ItemButton: React.FC<ItemButtonProps> = ({
	children,
	onClick,
	type = 'button',
	disabled = false,
	className = '',
	variant = 'default',
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`item-button item-button--${variant} ${className}`}
		>
			{children}
		</button>
	);
};
