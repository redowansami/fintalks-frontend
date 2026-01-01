import React from 'react';
import { Button } from '../Button';
import { PasswordInput } from '../PasswordInput';
import { ErrorDialog } from '../ErrorComponents/ErrorDialog';
import { extractValidationErrors } from '../../utils/errorExtractor';

interface NewPasswordStepProps {
	newPassword: string;
	confirmPassword: string;
	onNewPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	onBack: () => void;
	isPending: boolean;
	error: Error | null;
}

export const NewPasswordStep: React.FC<NewPasswordStepProps> = ({
	newPassword,
	confirmPassword,
	onNewPasswordChange,
	onConfirmPasswordChange,
	onSubmit,
	onBack,
	isPending,
	error,
}) => (
	<form onSubmit={onSubmit} className="edit-profile-form">
		{error && (
			<ErrorDialog
				message={error.message || 'Failed to change password'}
				validationErrors={extractValidationErrors(error)}
			/>
		)}
		<PasswordInput
			id="newPassword"
			name="newPassword"
			label="New Password"
			placeholder="Enter your new password"
			value={newPassword}
			onChange={onNewPasswordChange}
		/>
		<PasswordInput
			id="confirmPassword"
			name="confirmPassword"
			label="Confirm Password"
			placeholder="Re-enter your new password"
			value={confirmPassword}
			onChange={onConfirmPasswordChange}
		/>
		<div className="edit-profile-actions">
			<Button type="button" variant="secondary" onClick={onBack} disabled={isPending}>
				Back
			</Button>
			<Button type="submit" variant="primary" disabled={isPending}>
				{isPending ? 'Updating...' : 'Change Password'}
			</Button>
		</div>
	</form>
);
