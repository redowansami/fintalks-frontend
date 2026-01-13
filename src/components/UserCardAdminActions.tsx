import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { IconButton } from './Buttons/IconButton';
import { Button } from './Buttons/Button';
import { useDeleteUser } from '../hooks/profile/useDeleteUser';
import type { User } from '../interfaces/services/user';

interface UserCardAdminActionsProps {
	user: User;
	onDeleteUser?: (userId: string) => void;
	onEscalateUser?: () => void;
}

export const UserCardAdminActions: React.FC<UserCardAdminActionsProps> = ({
	user,
	onDeleteUser,
}) => {
	const { deleteUserAsync, loading } = useDeleteUser();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<div className="user-card--admin-actions">
				<div className="user-card--actions-wrapper">
					<IconButton
						icon="material-symbols:settings-outline"
						label="User actions"
						variant="ghost"
						size="md"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					/>
					{isMenuOpen && (
						<>
							<div
								className="user-card--actions-backdrop"
								onClick={() => setIsMenuOpen(false)}
							/>
							<div className="user-card--actions-menu">
								<Button
									variant="item-default"
									onClick={async () => {
										await deleteUserAsync(user.userId);
										onDeleteUser?.(user.userId);
										setIsMenuOpen(false);
									}}
									disabled={loading}
								>
									<Icon icon="material-symbols:delete-outline" className="pr-1" />
									{loading ? 'Deleting...' : 'Delete User'}
								</Button>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};
