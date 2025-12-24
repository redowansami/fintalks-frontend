import React from 'react';
import type { UseMutationResult } from '@tanstack/react-query';
import { Button } from '../Button';
import { ErrorDialog } from '../ErrorComponents/ErrorDialog';

interface EditProfileData {
	name: string;
	bio: string;
}

interface EditProfileFormProps {
	formData: EditProfileData;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	onCancel: () => void;
	mutation: UseMutationResult<unknown, Error, EditProfileData>;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
	formData,
	handleChange,
	onSubmit,
	onCancel,
	mutation,
}) => (
	<form onSubmit={onSubmit} className="edit-profile-form">
		<div className="edit-profile-field">
			<label>Name</label>
			<input type="text" name="name" value={formData.name} onChange={handleChange} required />
		</div>
		<div className="edit-profile-field">
			<label>Bio</label>
			<textarea name="bio" value={formData.bio} onChange={handleChange} rows={4} />
		</div>
		<div className="edit-profile-actions">
			<Button
				type="button"
				onClick={onCancel}
				disabled={mutation.isPending}
				className="edit-profile-btn cancel"
			>
				Cancel
			</Button>
			<Button type="submit" disabled={mutation.isPending} className="edit-profile-btn submit">
				{mutation.isPending ? 'Updating...' : 'Update Profile'}
			</Button>
		</div>
		{mutation.isError && (
			<ErrorDialog message={mutation.error?.message || 'Failed to update profile'} />
		)}
	</form>
);
