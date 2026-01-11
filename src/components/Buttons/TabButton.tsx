import React from 'react';
import '../../styles/components/Buttons/TabButton.css';
import type { TabButtonProps } from '../../interfaces/components/buttons';

export const TabButton: React.FC<TabButtonProps> = ({
	children,
	isActive,
	onClick,
	variant = 'pill',
	className = '',
}) => {
	const variantClass = `tab-btn--${variant}`;
	const classes = ['tab-btn', variantClass, className].join(' ').trim();

	return (
		<button
			type="button"
			onClick={onClick}
			data-active={isActive}
			className={classes}
			aria-pressed={isActive}
		>
			{children}
		</button>
	);
};
