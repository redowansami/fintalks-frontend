import React from 'react';
import { Typography } from '../../../components/Typography';
import { List, ListItem } from '../../../components/List';
import { getPasswordChecks } from '../utils';
import '../styles/PasswordRequirements.css';

interface PasswordRequirementsProps {
	password: string;
}

export const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ password }) => {
	const checks = getPasswordChecks(password);

	return (
		<div className="password-requirements">
			<Typography variant="body">Password Requirements</Typography>
			<List>
				{[
					{ key: 'lowercase', label: 'Lowercase character' },
					{ key: 'digit', label: 'One digit' },
					{ key: 'uppercase', label: 'Uppercase character' },
					{ key: 'special', label: 'Special character (!@#$)' },
					{ key: 'length', label: 'At least 8 characters' },
				].map(({ key, label }) => (
					<ListItem
						key={key}
						className={`requirement-item ${
							checks[key as keyof typeof checks] ? 'valid' : 'invalid'
						}`}
					>
						<Typography
							color={checks[key as keyof typeof checks] ? 'success' : 'error'}
						>
							{checks[key as keyof typeof checks] ? '✓ ' : '✗ '}
							{' ' + label}
						</Typography>
					</ListItem>
				))}
			</List>
		</div>
	);
};
