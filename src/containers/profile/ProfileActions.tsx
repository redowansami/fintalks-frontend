import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../../components/Buttons/Button';
import '../../styles/containers/profile/ProfileActions.css';

interface ProfileActionsProps {
	onEditProfile: () => void;
	onChangePassword: () => void;
}

export const ProfileActions: React.FC<ProfileActionsProps> = ({
	onEditProfile,
	onChangePassword,
}) => {
	return (
		<>
			<Button variant="secondary" onClick={onEditProfile}>
				<Icon icon="material-symbols:edit" />
				Edit Profile
			</Button>
			<Button variant="primary" onClick={onChangePassword}>
				<Icon icon="material-symbols:lock-reset" />
				Password Change
			</Button>
		</>
	);
};
