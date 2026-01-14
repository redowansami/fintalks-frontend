import React from 'react';
import { Icon } from '@iconify/react';
import '../../styles/components/Buttons/IconButton.css';
import type { IconButtonProps } from '../../interfaces/components/buttons';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{ icon, label, variant = 'ghost', size = 'md', className = '', onClick, tooltip, ...props },
		ref,
	) => {
		const variantClass = `icon-button--${variant}`;
		const sizeClass = `icon-button--${size}`;
		const classes = ['icon-button', variantClass, sizeClass, className].join(' ').trim();
		return (
			<button
				ref={ref}
				type="button"
				className={classes}
				onClick={onClick}
				aria-label={label}
				title={tooltip || label}
				{...props}
			>
				<Icon icon={icon} />
			</button>
		);
	},
);
