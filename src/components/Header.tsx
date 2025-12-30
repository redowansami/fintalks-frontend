import { useState } from 'react';
import '../styles/Header.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { CreateStoryModal } from './CreateStoryModal';

export const Header: React.FC = () => {
	const navigate = useNavigate();
	const { user, logout } = useAuthContext();
	const [showMenu, setShowMenu] = useState(false);
	const [isCreateStoryModalOpen, setIsCreateStoryModalOpen] = useState(false);

	const handleCreateStory = () => {
		if (!user) {
			navigate('/login');
			return;
		}
		setIsCreateStoryModalOpen(true);
	};

	const handleLogout = () => {
		logout();
		setShowMenu(false);
		navigate('/');
	};

	const handleViewProfile = () => {
		navigate('/profile');
		setShowMenu(false);
	};

	return (
		<header className="header">
			<div className="header-content">
				<div className="header-left">
					<button className="icon-button" aria-label="Search">
						<Icon icon="material-symbols:search" />
					</button>
					<span
						style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--primary)' }}
					>
						The Finance Voice
					</span>
				</div>
				<div className="header-center">
					<a className="logo" href="/">
						FinTalks
					</a>
				</div>
				<div className="header-right">
					<button className="btn-secondary" onClick={handleCreateStory}>
						Create Story
					</button>
					{user ? (
						<div className="user-menu-wrapper">
							<button
								className="btn-primary user-menu-btn"
								onClick={() => setShowMenu(!showMenu)}
							>
								<Icon icon="mdi:user" /> {user.username}
							</button>
							{showMenu && (
								<div className="user-menu">
									<button className="user-menu-item" onClick={handleViewProfile}>
										View Profile
									</button>
									<button
										className="user-menu-item logout"
										onClick={handleLogout}
									>
										Logout
									</button>
								</div>
							)}
						</div>
					) : (
						<button className="btn-primary" onClick={() => navigate('/login')}>
							<Icon icon="mdi:user" /> Login
						</button>
					)}
				</div>
			</div>
			<CreateStoryModal
				isOpen={isCreateStoryModalOpen}
				onClose={() => setIsCreateStoryModalOpen(false)}
			/>
		</header>
	);
};
