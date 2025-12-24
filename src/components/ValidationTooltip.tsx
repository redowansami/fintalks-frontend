import { useState } from 'react';
import '../styles/ValidationTooltip.css';
import { Icon } from '@iconify/react';

interface ValidationTooltipProps {
	criteria: string[];
}

export const ValidationTooltip = ({ criteria }: ValidationTooltipProps) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className="validation-tooltip-container">
			<button
				type="button"
				className="validation-icon"
				onClick={() => setShowTooltip(!showTooltip)}
				onBlur={() => setTimeout(() => setShowTooltip(false), 200)}
				title="View validation criteria"
			>
				<Icon icon="mdi:information" />
			</button>

			{showTooltip && (
				<div className="validation-tooltip-popup">
					<ul className="validation-criteria-list">
						{criteria.map((criterion, idx) => (
							<li key={idx}>{criterion}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
