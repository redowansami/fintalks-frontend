import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { UserCardAdminActions } from './UserCardAdminActions';
import { Typography } from './Typography';
import { getAvatarInitials, getAvatarColor } from '../utils/avatar';
import '../styles/components/UserCard.css';
import { useAuthContext } from '../hooks/useAuthContext';
import type { User } from '../interfaces/services/user';

interface UserCardProps {
	user: User;
	onDeleteUser?: (userId: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onDeleteUser }) => {
	const navigate = useNavigate();
	const { user: currentUser } = useAuthContext();
	const isAdmin = currentUser?.role === 'ADMIN';

	const handleViewProfile = () => {
		navigate(`/profile/${user.userId}`);
	};

	const initials = getAvatarInitials(user.name);
	const avatarColor = getAvatarColor(user.userId);

	return (
		<div className="user-card">
			{isAdmin && <UserCardAdminActions user={user} onDeleteUser={onDeleteUser} />}
			<div className="user-card--avatar" style={{ backgroundColor: avatarColor }}>
				{user.profilePictureUrl ? (
					<img
						src={user.profilePictureUrl}
						alt={user.name}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: 'inherit',
						}}
					/>
				) : (
					initials
				)}
			</div>
			<Typography variant="h3" className="pb-2">
				{user.name}
			</Typography>
			<Typography variant="muted" className="pb-3">
				@{user.username}
			</Typography>

			<div className="user-card--footer">
				<div className="user-card--email">
					<Icon icon="mdi:email" />
					<Typography variant="muted">
						{user.email.length > 15 ? `${user.email.slice(0, 15)}...` : user.email}
					</Typography>
				</div>
				<Typography
					variant="link"
					color="primary"
					className="user-card--view-profile"
					onClick={handleViewProfile}
				>
					View Profile
				</Typography>
			</div>
		</div>
	);
};
