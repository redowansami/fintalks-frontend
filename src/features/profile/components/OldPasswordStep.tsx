import React from 'react';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';
import '../styles/EditProfileModal.css';
import { ErrorDialog } from '../../../components/ErrorComponents/ErrorDialog';
import { extractValidationErrors } from '../../../utils/errorExtractor';

interface OldPasswordStepProps {
	oldPassword: string;
	onOldPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	onCancel: () => void;
	isPending: boolean;
	error: Error | null;
}

export const OldPasswordStep: React.FC<OldPasswordStepProps> = ({
	oldPassword,
	onOldPasswordChange,
	onSubmit,
	onCancel,
	isPending,
	error,
}) => (
	<form onSubmit={onSubmit} className="edit-profile-form">
		{error && (
			<ErrorDialog
				message={error.message || 'Failed to verify old password'}
				validationErrors={extractValidationErrors(error)}
			/>
		)}
		<PasswordInput
			id="oldPassword"
			name="oldPassword"
			label="Current Password"
			placeholder="Enter your current password"
			value={oldPassword}
			onChange={onOldPasswordChange}
		/>
		<div className="edit-profile-actions">
			<Button type="button" variant="secondary" onClick={onCancel} disabled={isPending}>
				Cancel
			</Button>
			<Button type="submit" variant="primary" disabled={isPending}>
				{isPending ? 'Verifying...' : 'Continue'}
			</Button>
		</div>
	</form>
);
