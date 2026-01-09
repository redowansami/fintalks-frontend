import React from 'react';
import { Button } from '../../components/Buttons/Button';
import '../../styles/containers/profile/EditProfileModal.css';
import { ErrorDialog } from '../../components/ErrorComponents/ErrorDialog';
import { InputField } from '../../components/InputField';
import { PROFILE_FORM_VALIDATIONS } from '../../constants/profileFormConstants';
import { extractValidationErrors } from '../../utils/errorExtractor';

interface EditProfileFormProps {
	formData: { name: string; bio: string };
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	isLoading?: boolean;
	error?: Error | null;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
	formData,
	handleChange,
	onSubmit,
	isLoading = false,
	error,
}) => {
	return (
		<form onSubmit={onSubmit} className="edit-profile-form">
			{error && (
				<ErrorDialog
					message={error?.message || 'Failed to update profile'}
					validationErrors={extractValidationErrors(error)}
				/>
			)}
			<InputField
				label={PROFILE_FORM_VALIDATIONS.NAME.label}
				id="name"
				name="name"
				type="text"
				value={formData.name}
				onChange={handleChange}
				required
				validationCriteria={PROFILE_FORM_VALIDATIONS.NAME.criteria}
			/>
			<InputField
				label={PROFILE_FORM_VALIDATIONS.BIO.label}
				id="bio"
				name="bio"
				type="textarea"
				value={formData.bio}
				onChange={handleChange}
				rows={4}
				validationCriteria={PROFILE_FORM_VALIDATIONS.BIO.criteria}
			/>
			<div className="edit-profile-actions">
				<Button type="submit" variant="primary" disabled={isLoading}>
					{isLoading ? 'Updating...' : 'Update Profile'}
				</Button>
			</div>
		</form>
	);
};
