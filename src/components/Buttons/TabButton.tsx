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
	return (
		<button
			type="button"
			onClick={onClick}
			data-active={isActive}
			className={`tab-btn tab-btn--${variant} ${className}`}
			aria-pressed={isActive}
		>
			{children}
		</button>
	);
};
