import '../styles/ValidationCriteriaPopup.css';

interface ValidationCriteriaPopupProps {
	criteria: string[];
}

export const ValidationCriteriaPopup = ({ criteria }: ValidationCriteriaPopupProps) => {
	return (
		<div className="validation-tooltip-popup">
			<ul className="validation-criteria-list">
				{criteria.map((criterion, idx) => (
					<li key={idx}>{criterion}</li>
				))}
			</ul>
		</div>
	);
};
