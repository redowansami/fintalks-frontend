import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/CloseButton.css';

interface CloseButtonProps {
	onClick: () => void;
	disabled?: boolean;
	className?: string;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick, disabled = false }) => {
	return (
		<button
			className={`close-button`}
			onClick={onClick}
			disabled={disabled}
			aria-label="Close"
			type="button"
		>
			<Icon icon="material-symbols:close" />
		</button>
	);
};
