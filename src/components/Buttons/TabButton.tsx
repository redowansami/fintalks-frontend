import React from 'react';
import '../../styles/components/Buttons/TabButton.css';

type TabVariant = 'pill' | 'folder';

interface TabButtonProps {
	children: React.ReactNode;
	isActive: boolean;
	onClick: () => void;
	variant?: TabVariant;
	className?: string;
}

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
