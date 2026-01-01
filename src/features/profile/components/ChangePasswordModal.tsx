import React from 'react';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';
import { ErrorDialog } from '../../../components/ErrorComponents/ErrorDialog';
import { extractValidationErrors } from '../../../utils/errorExtractor';
import { useChangePassword } from '../hooks';
import '../styles/EditProfileModal.css';

interface ChangePasswordModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
	const passwordManager = useChangePassword(onClose);

	if (!isOpen) return null;

	if (passwordManager.showSuccess) {
		return (
			<div className="edit-profile-overlay">
				<div className="edit-profile-modal">
					<h2 className="edit-profile-title">Success</h2>
					<p style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
						Your password has been changed successfully.
					</p>
					<div className="edit-profile-actions">
						<Button
							type="button"
							variant="primary"
							onClick={passwordManager.resetAndClose}
						>
							Close
						</Button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="edit-profile-overlay">
			<div className="edit-profile-modal">
				<h2 className="edit-profile-title">Change Password</h2>
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
						onChange={(e) =>
							passwordManager.updateField('currentPassword', e.target.value)
						}
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
						onChange={(e) =>
							passwordManager.updateField('confirmPassword', e.target.value)
						}
					/>
					<div className="edit-profile-actions">
						<Button
							type="button"
							variant="secondary"
							onClick={passwordManager.resetAndClose}
							disabled={passwordManager.isPending}
						>
							Cancel
						</Button>
						<Button
							type="submit"
							variant="primary"
							disabled={passwordManager.isPending}
						>
							{passwordManager.isPending ? 'Changing...' : 'Change Password'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
