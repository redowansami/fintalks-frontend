import React from 'react';
import { Modal } from '../../components';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Buttons/Button';
import { ErrorDialog } from '../../components/ErrorComponents/ErrorDialog';
import { extractValidationErrors } from '../../utils/errorExtractor';
import { useChangePassword } from '../../hooks/profile';
import { Typography } from '../../components/Typography';

interface ChangePasswordModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
	const passwordManager = useChangePassword(onClose);

	if (passwordManager.showSuccess) {
		return (
			<Modal isOpen={isOpen} onClose={onClose} title="Success">
				<Typography variant="h3" color="success" textAlign="center" className="mb-4">
					Your password has been changed successfully.
				</Typography>
			</Modal>
		);
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Change Password">
			<form onSubmit={passwordManager.handleSubmit} className="edit-profile-form">
				{passwordManager.error && (
					<ErrorDialog
						message={passwordManager.error.message || 'Failed to change password'}
						validationErrors={extractValidationErrors(passwordManager.error)}
					/>
				)}
				<PasswordInput
					id="currentPassword"
					name="currentPassword"
					label="Current Password"
					placeholder="Enter your current password"
					value={passwordManager.formData.currentPassword}
					onChange={(e) => passwordManager.updateField('currentPassword', e.target.value)}
				/>
				<PasswordInput
					id="newPassword"
					name="newPassword"
					label="New Password"
					placeholder="Enter your new password"
					value={passwordManager.formData.newPassword}
					onChange={(e) => passwordManager.updateField('newPassword', e.target.value)}
				/>
				<PasswordInput
					id="confirmPassword"
					name="confirmPassword"
					label="Confirm New Password"
					placeholder="Re-enter your new password"
					value={passwordManager.formData.confirmPassword}
					onChange={(e) => passwordManager.updateField('confirmPassword', e.target.value)}
				/>
				<Button type="submit" variant="primary" disabled={passwordManager.isPending}>
					{passwordManager.isPending ? 'Changing...' : 'Change Password'}
				</Button>
			</form>
		</Modal>
	);
};
