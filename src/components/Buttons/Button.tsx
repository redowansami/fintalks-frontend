import React from 'react';
import '../../styles/components/Buttons/Button.css';
import type { ButtonVariant } from '../../constants/button';
import type { ButtonProps } from '../../interfaces/components/buttons';

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	isPending = false,
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
		if (v === 'box') return 'btn-shape-box';
		return 'btn-shape-standard';
	};

	const shapeClass = getShapeClass(variant);
	const variantClass = `btn--${variant}`;
	const fontStyles = [isBold && 'font-bold', isItalic && 'italic'].filter(Boolean).join(' ');
	const classes = ['btn', shapeClass, variantClass, fontStyles, className].join(' ').trim();

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled || isPending}
			className={classes}
			{...rest}
		>
			{isPending ? loadingText || children : children}
		</button>
	);
};
