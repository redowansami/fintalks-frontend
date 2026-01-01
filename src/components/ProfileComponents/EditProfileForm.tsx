import React from 'react';
import type { UseMutationResult } from '@tanstack/react-query';
import { Button } from '../Button';
import { ErrorDialog } from '../ErrorComponents/ErrorDialog';
import { InputField } from '../InputField';
import { TextAreaField } from '../TextAreaField';
import { PROFILE_FORM_VALIDATIONS } from '../../constants/profileFormConstants';
import { extractValidationErrors } from '../../utils/errorExtractor';

interface EditProfileFormProps {
	formData: { name: string; bio: string };
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	onCancel: () => void;
	mutation: UseMutationResult<unknown, Error, { name: string; bio: string }>;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
	formData,
	handleChange,
	onSubmit,
	onCancel,
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
				onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
				required
				validationCriteria={PROFILE_FORM_VALIDATIONS.NAME.criteria}
			/>
			<TextAreaField
				label={PROFILE_FORM_VALIDATIONS.BIO.label}
				id="bio"
				name="bio"
				value={formData.bio}
				onChange={handleChange as React.ChangeEventHandler<HTMLTextAreaElement>}
				rows={4}
				validationCriteria={PROFILE_FORM_VALIDATIONS.BIO.criteria}
			/>
			<div className="edit-profile-actions">
				<Button
					type="button"
					variant="secondary"
					onClick={onCancel}
					disabled={mutation.isPending}
				>
					Cancel
				</Button>
				<Button type="submit" variant="primary" disabled={mutation.isPending}>
					{mutation.isPending ? 'Updating...' : 'Update Profile'}
				</Button>
			</div>
		</form>
	);
};
