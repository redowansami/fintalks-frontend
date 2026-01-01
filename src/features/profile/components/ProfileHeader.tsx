import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../../../components/Button';
import '../styles/ProfileHeader.css';

interface Profile {
	profilePictureUrl: string | null;
	name: string;
	username: string;
}

interface ProfileHeaderProps {
	profile: Profile;
	onEditPicture: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, onEditPicture }) => {
	return (
		<div className="profile-picture-wrapper">
			<div className="profile-picture">
				{profile.profilePictureUrl ? (
					<img
						src={profile.profilePictureUrl}
						alt={profile.name}
						className="profile-image"
					/>
				) : (
					<div className="profile-image-placeholder">
						<Icon icon="mdi:user" className="placeholder-icon" />
					</div>
				)}
			</div>
			<Button className="profile-edit-btn" onClick={onEditPicture}>
				<Icon icon="material-symbols:photo-camera" />
			</Button>
		</div>
	);
};
