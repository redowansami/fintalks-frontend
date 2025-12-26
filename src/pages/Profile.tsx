import { useState } from 'react';
import { Spinner } from '../components/Spinner';
import { EditProfileModal } from '../components/ProfileComponents/EditProfileModal';
import { ChangePasswordModal } from '../components/ProfileComponents/ChangePasswordModal';
import { ProfileLayout } from '../components/ProfileLayout';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import { useProfile } from '../hooks/useProfile';
import {
	ProfileHeader,
	ProfileActions,
	ProfileBio,
	ProfileStories,
} from '../components/ProfileComponents';
import '../styles/Profile.css';

export const Profile = () => {
	const { data, isLoading, isError, error } = useProfile();
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
	const profile = data?.profile;

	const renderContent = () => {
		if (isLoading) return <Spinner />;

		if (isError || !profile) {
			const errorMessage = isError ? error.message : 'Failed to load profile';
			return <ErrorDialog message={errorMessage} />;
		}

		return (
			<>
				<section className="profile-header-section">
					<div className="profile-header-content">
						<ProfileHeader profile={profile} onEditPicture={() => {}} />
						<div className="profile-info">
							<div className="profile-header-top">
								<div className="profile-names">
									<h1 className="profile-full-name">{profile.name}</h1>
									<p className="profile-username">@{profile.username}</p>
								</div>
								<div className="profile-actions">
									<ProfileActions
										onEditProfile={() => setIsEditModalOpen(true)}
										onChangePassword={() => setIsChangePasswordModalOpen(true)}
									/>
								</div>
							</div>
							<ProfileBio profile={profile} />
						</div>
					</div>
				</section>
				<ProfileStories storyCount={0} />
			</>
		);
	};

	return (
		<ProfileLayout>
			{renderContent()}
			{profile && (
				<>
					<EditProfileModal
						isOpen={isEditModalOpen}
						onClose={() => setIsEditModalOpen(false)}
						initialName={profile.name}
						initialBio={profile.bio}
					/>
					<ChangePasswordModal
						isOpen={isChangePasswordModalOpen}
						onClose={() => setIsChangePasswordModalOpen(false)}
					/>
				</>
			)}
		</ProfileLayout>
	);
};
