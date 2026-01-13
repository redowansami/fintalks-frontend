import { useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { useGetUser } from '../hooks/useGetUser';
import '../styles/pages/Profile.css';
import { Typography } from '../components/Typography';

export const Profile = () => {
	const { userId } = useParams<{ userId?: string }>();
	const { data, isPending, isError, error } = useGetUser(userId);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
	const [isImageUploadModalOpen, setIsImageUploadModalOpen] = useState(false);

	const user = data?.user;
	const isOwnProfile = data?.isOwnProfile ?? false;

	const renderContent = () => {
		if (isPending) return <Spinner />;

		if (isError || !user) {
			const errorMessage = isError ? error.message : 'Failed to load profile';
			return <ErrorDialog message={errorMessage} />;
		}

		return (
			<>
				<section className="profile-header-section">
					<ProfilePicture
						profile={user}
						onEditPicture={
							isOwnProfile ? () => setIsImageUploadModalOpen(true) : undefined
						}
						isEditable={isOwnProfile}
					/>
					<div className="profile-info">
						<div className="profile-header-top">
							<div className="profile-names">
								<Typography variant="h1">{user.name}</Typography>
								<Typography variant="h3" color="muted">
									@{user.username}
								</Typography>
							</div>
						</div>
						<ProfileBio profile={user} />
					</div>
					{isOwnProfile && (
						<ProfileActions
							onEditProfile={() => setIsEditModalOpen(true)}
							onChangePassword={() => setIsChangePasswordModalOpen(true)}
						/>
					)}
				</section>
				<ProfileStories userId={user.userId} />
			</>
		);
	};

	return (
		<>
			{renderContent()}
			{user && isOwnProfile && (
				<>
					<EditProfileModal
						isOpen={isEditModalOpen}
						onClose={() => setIsEditModalOpen(false)}
						initialData={{ name: user.name, bio: user.bio || '' }}
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
