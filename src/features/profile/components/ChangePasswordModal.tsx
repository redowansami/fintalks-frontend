import React from 'react';
import { Modal } from '../../../components/Modal';
import { OldPasswordStep } from './OldPasswordStep';
import { CodeVerificationStep } from './CodeVerificationStep';
import { NewPasswordStep } from './NewPasswordStep';
import { useChangePassword } from '../hooks';

interface ChangePasswordModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
	const passwordManager = useChangePassword(onClose);

	if (!isOpen) return null;

	const renderStep = () => {
		switch (passwordManager.step) {
			case 'oldPassword':
				return (
					<OldPasswordStep
						oldPassword={passwordManager.formData.oldPassword}
						onOldPasswordChange={passwordManager.handlers.handleOldPasswordChange}
						onSubmit={passwordManager.handlers.handleOldPasswordSubmit}
						onCancel={passwordManager.helpers.resetAndClose}
						isPending={passwordManager.mutations.request.isPending}
						error={passwordManager.mutations.request.error}
					/>
				);
			case 'verification':
				return (
					<CodeVerificationStep
						code={passwordManager.formData.code}
						onCodeChange={(e) =>
							passwordManager.helpers.updateField('code', e.target.value)
						}
						onSubmit={passwordManager.handlers.handleCodeSubmit}
						onBack={passwordManager.helpers.goToPrevious}
						isPending={passwordManager.mutations.verify.isPending}
						error={passwordManager.mutations.verify.error}
					/>
				);
			case 'newPassword':
				return (
					<NewPasswordStep
						newPassword={passwordManager.formData.newPassword}
						confirmPassword={passwordManager.formData.confirmPassword}
						onNewPasswordChange={(e) =>
							passwordManager.helpers.updateField('newPassword', e.target.value)
						}
						onConfirmPasswordChange={(e) =>
							passwordManager.helpers.updateField('confirmPassword', e.target.value)
						}
						onSubmit={passwordManager.handlers.handleNewPasswordSubmit}
						onBack={passwordManager.helpers.goToPrevious}
						isPending={passwordManager.mutations.confirm.isPending}
						error={passwordManager.mutations.confirm.error}
					/>
				);
			case 'success':
				return (
					<Modal
						isOpen={true}
						onClose={passwordManager.helpers.resetAndClose}
						title="Success"
						message="Your password has been changed successfully."
						actionButtonText="Close"
						onActionClick={passwordManager.helpers.resetAndClose}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div className="edit-profile-overlay">
			<div className="edit-profile-modal">
				<h2 className="edit-profile-title">Change Password</h2>
				{renderStep()}
			</div>
		</div>
	);
};
