import { List, ListItem } from './List';
import { Typography } from './Typography';
import '../styles/components/ValidationCriteriaPopup.css';
import type { ValidationCriteriaPopupProps } from '../interfaces/components/validation';

export const ValidationCriteriaPopup = ({ criteria }: ValidationCriteriaPopupProps) => {
	return (
		<div className="validation-tooltip-popup">
			<List variant="unordered" className="validation-criteria-list">
				{criteria.map((criterion, idx) => (
					<ListItem key={idx}>
						<Typography variant="body">{'-  ' + criterion}</Typography>
					</ListItem>
				))}
			</List>
		</div>
	);
};
