import React from 'react';
import type { TooltipButtonProps } from '../types/components/tooltipButtonProps';
import '../styles/TooltipButton.css';

export const TooltipButton: React.FC<TooltipButtonProps> = ({
	children,
	className = '',
	...rest
}) => {
	return (
		<button type="button" className={`tooltip-button ${className}`} {...rest}>
			{children}
		</button>
	);
};
