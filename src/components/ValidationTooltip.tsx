import { useState } from 'react';
import '../styles/ValidationTooltip.css';
import { IconButton } from './Buttons/IconButton';
import { ValidationCriteriaPopup } from './ValidationCriteriaPopup';

interface ValidationTooltipProps {
	criteria: string[];
}

export const ValidationTooltip = ({ criteria }: ValidationTooltipProps) => {
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
