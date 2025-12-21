import React from 'react';
import '../styles/PasswordRequirements.css';

interface PasswordRequirementsProps {
	password: string;
}

export const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ password }) => {
	const checks = {
		lowercase: /[a-z]/.test(password),
		digit: /\d/.test(password),
		uppercase: /[A-Z]/.test(password),
		special: /[!@#$%^&*]/.test(password),
		length: password.length >= 8,
	};

	return (
		<div className="password-requirements">
			<p className="password-requirements-title">Password Requirements</p>
			<ul className="requirements-list">
				{[
					{ key: 'lowercase', label: 'Lowercase character' },
					{ key: 'digit', label: 'One digit' },
					{ key: 'uppercase', label: 'Uppercase character' },
					{ key: 'special', label: 'Special character (!@#$)' },
					{ key: 'length', label: 'At least 8 characters' },
				].map(({ key, label }) => (
					<li
						key={key}
						className={`requirement-item ${
							checks[key as keyof typeof checks] ? 'valid' : 'invalid'
						}`}
					>
						<span className="requirement-icon">
							{checks[key as keyof typeof checks] ? '✓' : '✗'}
						</span>
						{label}
					</li>
				))}
			</ul>
		</div>
	);
};
