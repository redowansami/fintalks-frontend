import { useState } from 'react';
import { Spinner } from '../components/Spinner';
import { ImageUploadModal } from '../containers/profile/ImageUploadModal';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import {
	ProfilePicture,
	ProfileActions,
	ProfileBio,
	ProfileStories,
	EditProfileModal,
	ChangePasswordModal,
} from '../containers/profile';
import { useProfile } from '../hooks/profile';
import '../styles/pages/Profile.css';
import { Typography } from '../components/Typography';

export const Profile = () => {
	const { data, isPending, isError, error } = useProfile();
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
	const [isImageUploadModalOpen, setIsImageUploadModalOpen] = useState(false);
	const profile = data?.profile;

	const renderContent = () => {
		if (isPending) return <Spinner />;

		if (isError || !profile) {
			const errorMessage = isError ? error.message : 'Failed to load profile';
			return <ErrorDialog message={errorMessage} />;
		}

		return (
			<>
				<section className="profile-header-section">
					<ProfilePicture
						profile={profile}
						onEditPicture={() => setIsImageUploadModalOpen(true)}
					/>
					<div className="profile-info">
						<div className="profile-header-top">
							<div className="profile-names">
								<Typography variant="h1">{profile.name}</Typography>
								<Typography variant="h3" color="muted">
									@{profile.username}
								</Typography>
							</div>
						</div>
						<ProfileBio profile={profile} />
					</div>
					<ProfileActions
						onEditProfile={() => setIsEditModalOpen(true)}
						onChangePassword={() => setIsChangePasswordModalOpen(true)}
					/>
				</section>
				<ProfileStories storyCount={0} />
			</>
		);
	};

	return (
		<>
			{renderContent()}
			{profile && (
				<>
					<EditProfileModal
						isOpen={isEditModalOpen}
						onClose={() => setIsEditModalOpen(false)}
						initialData={{ name: profile.name, bio: profile.bio || '' }}
					/>
					<ChangePasswordModal
						isOpen={isChangePasswordModalOpen}
						onClose={() => setIsChangePasswordModalOpen(false)}
					/>
					<ImageUploadModal
						isOpen={isImageUploadModalOpen}
						onClose={() => setIsImageUploadModalOpen(false)}
					/>
				</>
			)}
		</>
	);
};
