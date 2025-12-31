import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../../Button';
import { UserMenu } from './UserMenu';
import '../../../styles/HeaderComponents/HeaderActions.css';

interface HeaderActionsProps {
	user: { username: string } | null;
	onCreateStory: () => void;
	onViewProfile: () => void;
	onLogout: () => void;
	onLogin: () => void;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
	user,
	onCreateStory,
	onViewProfile,
	onLogout,
	onLogin,
}) => {
	return (
		<div className="header-right">
			<Button variant="secondary" onClick={onCreateStory}>
				Create Story
			</Button>
			{user ? (
				<UserMenu
					username={user.username}
					onViewProfile={onViewProfile}
					onLogout={onLogout}
				/>
			) : (
				<Button variant="primary" onClick={onLogin}>
					<Icon icon="mdi:user" /> Login
				</Button>
			)}
		</div>
	);
};
