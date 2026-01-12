import React from 'react';
import { Button } from '../../components/Buttons/Button';
import '../../styles/containers/profile/EditProfileModal.css';
import { ErrorDialog } from '../../components/ErrorComponents/ErrorDialog';
import { InputField } from '../../components/InputField';
import { PROFILE_FORM_VALIDATIONS } from '../../constants/profileFormConstants';
import { extractValidationErrors } from '../../utils/errorExtractor';
import type { BaseFormProps } from '../../interfaces/components/BaseFormProps';
import type { UpdateProfileInput } from '../../interfaces/common/profile';

export const EditProfileForm: React.FC<BaseFormProps<UpdateProfileInput>> = ({
	formData,
	onInputChange,
	onSubmit,
	isPending = false,
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
				onChange={onInputChange}
				required
				validationCriteria={PROFILE_FORM_VALIDATIONS.NAME.criteria}
			/>
			<InputField
				label={PROFILE_FORM_VALIDATIONS.BIO.label}
				id="bio"
				name="bio"
				type="textarea"
				value={formData.bio}
				onChange={onInputChange}
				rows={4}
				validationCriteria={PROFILE_FORM_VALIDATIONS.BIO.criteria}
			/>
			<div className="edit-profile-actions">
				<Button type="submit" variant="primary" disabled={isPending}>
					{isPending ? 'Updating...' : 'Update Profile'}
				</Button>
			</div>
		</form>
	);
};
