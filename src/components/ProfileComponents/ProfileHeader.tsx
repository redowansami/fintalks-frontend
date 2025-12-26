import { Icon } from '@iconify/react';

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
			<button
				className="profile-edit-btn"
				title="Update Profile Picture"
				onClick={onEditPicture}
			>
				<Icon icon="material-symbols:photo-camera" />
			</button>
		</div>
	);
};
