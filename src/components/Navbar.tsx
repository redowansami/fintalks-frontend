import { NavLink } from './NavLink';
import { CategoryList } from './CategoryList';
import '../styles/Navbar.css';

interface NavbarProps {
	activeCategory: string | null;
	onCategoryClick: (category: string | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeCategory, onCategoryClick }) => {
	return (
		<nav className="navbar">
			<div className="navbar-content">
				<ul className="nav-list">
					<NavLink
						label="Home"
						isActive={!activeCategory}
						onClick={() => onCategoryClick(null)}
					/>
					<CategoryList
						activeCategory={activeCategory}
						onCategoryClick={onCategoryClick}
					/>
				</ul>
			</div>
		</nav>
	);
};
