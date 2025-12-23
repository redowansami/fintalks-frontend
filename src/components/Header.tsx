import '../styles/Header.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
	const navigate = useNavigate();
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
					<button className="btn-secondary">Create Story</button>
					<button className="btn-primary" onClick={() => navigate('/login')}>
						<Icon icon="mdi:user" /> Login
					</button>
				</div>
			</div>
		</header>
	);
};
