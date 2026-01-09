import React from 'react';
import { Typography } from '../Typography';

interface StoryCategoryCheckboxProps {
	id: string;
	name: string;
	checked: boolean;
	onChange: (id: string) => void;
}

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
