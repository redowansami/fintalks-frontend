import { useState } from 'react';
import '../../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { CreateStoryModal } from '../CreateStoryModal';
import { HeaderSearch, HeaderLogo, HeaderActions } from './HeaderComponents';

export const Header: React.FC = () => {
	const navigate = useNavigate();
	const { user, logout } = useAuthContext();
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
		navigate('/');
	};

	const handleViewProfile = () => {
		navigate('/profile');
	};

	const handleLogin = () => {
		navigate('/login');
	};

	return (
		<header className="header">
			<div className="header-content">
				<HeaderSearch />
				<HeaderLogo />
				<HeaderActions
					user={user}
					onCreateStory={handleCreateStory}
					onViewProfile={handleViewProfile}
					onLogout={handleLogout}
					onLogin={handleLogin}
				/>
			</div>
			<CreateStoryModal
				isOpen={isCreateStoryModalOpen}
				onClose={() => setIsCreateStoryModalOpen(false)}
			/>
		</header>
	);
};
