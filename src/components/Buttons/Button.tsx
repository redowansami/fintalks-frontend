import React from 'react';
import '../../styles/components/Buttons/Button.css';

export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'danger'
	| 'item-default'
	| 'item-danger'
	| 'toolbar';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	isLoading?: boolean;
	loadingText?: string;

	isBold?: boolean;
	isItalic?: boolean;
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
	isBold = false,
	isItalic = false,
	...rest
}) => {
	const getShapeClass = (v: ButtonVariant) => {
		if (v.startsWith('item-')) return 'btn-shape-item';
		if (v === 'toolbar') return 'btn-shape-toolbar';
		return 'btn-shape-standard';
	};

	const shapeClass = getShapeClass(variant);
	const variantClass = `btn--${variant}`;

	const fontStyles = `
    ${isBold ? 'font-bold' : ''} 
    ${isItalic ? 'italic' : ''}
  `;

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled || isLoading}
			className={`btn ${shapeClass} ${variantClass} ${fontStyles} ${className}`}
			{...rest}
		>
			{isLoading ? loadingText || children : children}
		</button>
	);
};
