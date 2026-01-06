import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../Button';
import { UserMenu } from './UserMenu';

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
		<div className="flex-1 flex items-center justify-end md:w-1/4 gap-4">
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
