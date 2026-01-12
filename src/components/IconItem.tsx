import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/components/IconItem.css';
import { Typography } from './Typography';
import type { IconItemProps } from '../interfaces/components/iconItem';

export const IconItem: React.FC<IconItemProps> = ({ icon, children }) => {
	return (
		<div className="icon-item">
			<Icon icon={icon} />
			<Typography variant="muted">{children}</Typography>
		</div>
	);
};
