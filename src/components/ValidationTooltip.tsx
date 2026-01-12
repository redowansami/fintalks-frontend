import { useState } from 'react';
import '../styles/components/ValidationTooltip.css';
import { IconButton } from './Buttons/IconButton';
import { ValidationCriteriaPopup } from './ValidationCriteriaPopup';
import type { ValidationCriteriaProps } from '../interfaces/components/validation';

export const ValidationTooltip = ({ criteria }: ValidationCriteriaProps) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className="validation-tooltip-container">
			<IconButton
				icon="mdi:information"
				label="Show validation criteria"
				onClick={() => setShowTooltip(!showTooltip)}
				onBlur={() => setTimeout(() => setShowTooltip(false), 200)}
				variant="ghost"
				size="sm"
			/>

			{showTooltip && <ValidationCriteriaPopup criteria={criteria} />}
		</div>
	);
};
