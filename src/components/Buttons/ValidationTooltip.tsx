import { useState } from 'react';
import '../../styles/ValidationTooltip.css';
import { Icon } from '@iconify/react';
import { TooltipButton } from './TooltipButton';
import { ValidationCriteriaPopup } from '../ValidationCriteriaPopup';

interface ValidationTooltipProps {
	criteria: string[];
}

export const ValidationTooltip = ({ criteria }: ValidationTooltipProps) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className="validation-tooltip-container">
			<TooltipButton
				onClick={() => setShowTooltip(!showTooltip)}
				onBlur={() => setTimeout(() => setShowTooltip(false), 200)}
			>
				<Icon icon="mdi:information" />
			</TooltipButton>

			{showTooltip && <ValidationCriteriaPopup criteria={criteria} />}
		</div>
	);
};
