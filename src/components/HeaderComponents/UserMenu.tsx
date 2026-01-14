import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../Buttons/Button';
import '../../styles/components/HeaderComponents/UserMenu.css';
import type { UserMenuProps } from '../../interfaces/components/headerComponents';

export const UserMenu: React.FC<UserMenuProps> = ({ username, onViewProfile, onLogout }) => {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenuToggle = () => {
		setShowMenu(!showMenu);
	};

	const handleViewProfile = () => {
		onViewProfile();
		setShowMenu(false);
	};

	const handleLogout = () => {
		onLogout();
		setShowMenu(false);
	};

	return (
		<div className="user-menu-wrapper">
			<Button variant="primary" className="user-menu-btn" onClick={handleMenuToggle}>
				<Icon icon="mdi:user" /> {username}
			</Button>
			{showMenu && (
				<div className="user-menu">
					<Button variant="item-default" onClick={handleViewProfile}>
						View Profile
					</Button>
					<Button variant="item-danger" onClick={handleLogout}>
						Logout
					</Button>
				</div>
			)}
		</div>
	);
};
