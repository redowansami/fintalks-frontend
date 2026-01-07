import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { HeaderSearch, HeaderLogo, HeaderActions } from './HeaderComponents';
import '../styles/Header.css';

export const Header: React.FC = () => {
	const navigate = useNavigate();
	const { user, logout } = useAuthContext();

	const handleCreateStory = () => {
		if (!user) {
			navigate('/login');
			return;
		}
		navigate('/create-story');
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
		<>
			<header className="app-header">
				<HeaderSearch />
				<HeaderLogo />
				<HeaderActions
					user={user}
					onCreateStory={handleCreateStory}
					onViewProfile={handleViewProfile}
					onLogout={handleLogout}
					onLogin={handleLogin}
				/>
			</header>
		</>
	);
};
