import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../../../components/Buttons/Button';
import '../styles/ProfilePicture.css';

interface Profile {
	profilePictureUrl: string | null;
	name: string;
	username: string;
}

interface ProfilePictureProps {
	profile: Profile;
	onEditPicture: () => void;
}

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
