import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../../components/Buttons/Button';
import '../../styles/containers/profile/ProfilePicture.css';
import type { ProfilePictureProps } from '../../interfaces/containers/profile';

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ profile, onEditPicture }) => {
	return (
		<div className="profile-picture-wrapper">
			{profile.profilePictureUrl ? (
				<img src={profile.profilePictureUrl} alt={profile.name} className="profile-image" />
			) : (
				<div className="profile-image-placeholder">
					<Icon icon="mdi:user" />
				</div>
			)}

			<Button className="image-edit-btn" onClick={onEditPicture}>
				<Icon icon="material-symbols:photo-camera" />
			</Button>
		</div>
	);
};
