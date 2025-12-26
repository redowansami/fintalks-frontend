import { Icon } from '@iconify/react';

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
			<button className="btn-edit" onClick={onEditProfile}>
				<Icon icon="material-symbols:edit" />
				Edit Profile
			</button>
			<button className="btn-password" onClick={onChangePassword}>
				<Icon icon="material-symbols:lock-reset" />
				Password Change
			</button>
		</>
	);
};
