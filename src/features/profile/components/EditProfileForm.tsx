import React from 'react';
import type { UseMutationResult } from '@tanstack/react-query';
import { Button } from '../../../components/Buttons/Button';
import '../styles/EditProfileModal.css';
import { ErrorDialog } from '../../../components/ErrorComponents/ErrorDialog';
import { InputField } from '../../../components/InputField';
import { PROFILE_FORM_VALIDATIONS } from '../../../constants/profileFormConstants';
import { extractValidationErrors } from '../../../utils/errorExtractor';

interface EditProfileFormProps {
	formData: { name: string; bio: string };
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	mutation: UseMutationResult<unknown, Error, { name: string; bio: string }>;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
	formData,
	handleChange,
	onSubmit,
	mutation,
}) => {
	return (
		<form onSubmit={onSubmit} className="edit-profile-form">
			{mutation.isError && (
				<ErrorDialog
					message={mutation.error?.message || 'Failed to update profile'}
					validationErrors={extractValidationErrors(mutation.error)}
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
				<Button type="submit" variant="primary" disabled={mutation.isPending}>
					{mutation.isPending ? 'Updating...' : 'Update Profile'}
				</Button>
			</div>
		</form>
	);
};
