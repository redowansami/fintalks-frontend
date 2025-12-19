import React from 'react';

interface PasswordRequirementsProps {
	password: string;
}

export const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ password }) => {
	const checks = {
		lowercase: /[a-z]/.test(password),
		digit: /\d/.test(password),
		uppercase: /[A-Z]/.test(password),
		special: /[!@#$%^&*]/.test(password),
	};

	return (
		<div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-300">
			<p className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-3">
				Password Requirements
			</p>
			<ul className="space-y-2 text-sm">
				{[
					{ key: 'lowercase', label: 'Lowercase character' },
					{ key: 'digit', label: 'One digit' },
					{ key: 'uppercase', label: 'Uppercase character' },
					{ key: 'special', label: 'Special character (!@#$)' },
				].map(({ key, label }) => (
					<li
						key={key}
						className={`flex items-center ${
							checks[key as keyof typeof checks] ? 'text-green-600' : 'text-red-600'
						}`}
					>
						<span className="mr-2 text-lg">
							{checks[key as keyof typeof checks] ? '✓' : '✗'}
						</span>
						{label}
					</li>
				))}
			</ul>
		</div>
	);
};
