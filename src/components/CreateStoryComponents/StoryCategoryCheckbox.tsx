import React from 'react';
import { Typography } from '../Typography';
import type { StoryCategoryCheckboxProps } from '../../interfaces/components/createStoryComponents';

export const StoryCategoryCheckbox: React.FC<StoryCategoryCheckboxProps> = ({
	id,
	name,
	checked,
	onChange,
}) => {
	return (
		<label className="story-categories-label">
			<input
				type="checkbox"
				checked={checked}
				onChange={() => onChange(id)}
				className="story-categories-checkbox"
			/>
			<Typography>{name}</Typography>
		</label>
	);
};
