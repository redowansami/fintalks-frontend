import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from './NavLink';
import { CategoryList } from './CategoryList';
import '../styles/Navbar.css';

interface NavbarProps {
	activeCategory?: string | null;
	onCategoryClick?: (category: string | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeCategory = null, onCategoryClick }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	const handleCategoryClick = (category: string | null) => {
		if (isHomePage && onCategoryClick) {
			onCategoryClick(category);
		} else {
			navigate('/');
		}
	};

	return (
		<nav className="navbar">
			<div className="navbar-content">
				<ul className="nav-list">
					<NavLink
						label="Home"
						isActive={isHomePage && !activeCategory}
						onClick={() => handleCategoryClick(null)}
					/>
					<CategoryList
						activeCategory={isHomePage ? activeCategory : null}
						onCategoryClick={handleCategoryClick}
					/>
				</ul>
			</div>
		</nav>
	);
};
