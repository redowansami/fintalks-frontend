import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { IconButton } from '../../components/Buttons/IconButton';
import { Button } from '../../components/Buttons/Button';
import '../../styles/containers/profile/ProfileActions.css';
import type { ProfileActionsProps } from '../../interfaces/containers/profile';

export const ProfileActions: React.FC<ProfileActionsProps> = ({
	onEditProfile,
	onChangePassword,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleEditProfile = () => {
		onEditProfile();
		setIsMenuOpen(false);
	};

	const handleChangePassword = () => {
		onChangePassword();
		setIsMenuOpen(false);
	};

	return (
		<div className="profile-actions-wrapper">
			<IconButton
				icon="material-symbols:settings-outline"
				label="Profile actions"
				variant="ghost"
				size="md"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			/>
			{isMenuOpen && (
				<>
					<div
						className="profile-actions-backdrop"
						onClick={() => setIsMenuOpen(false)}
					/>
					<div className="profile-actions-menu">
						<Button variant="item-default" onClick={handleEditProfile}>
							<Icon icon="material-symbols:edit" className="pr-1" />
							Edit Profile
						</Button>
						<Button variant="item-default" onClick={handleChangePassword}>
							<Icon icon="material-symbols:lock-reset" className="pr-1" />
							Password Change
						</Button>
					</div>
				</>
			)}
		</div>
	);
};
