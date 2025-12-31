import { NavLink } from '../NavLink';
import { CategoryList } from '../CategoryList';
import '../../styles/Navbar.css';

interface NavbarProps {
	activeCategory?: string | null;
	onCategoryClick?: (category: string | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeCategory = null, onCategoryClick }) => {
	const handleCategoryClick = (category: string | null) => {
		onCategoryClick?.(category);
	};

	return (
		<nav className="navbar">
			<div className="navbar-content">
				<ul className="nav-list">
					<NavLink
						label="Home"
						isActive={!activeCategory}
						onClick={() => handleCategoryClick(null)}
					/>
					<CategoryList
						activeCategory={activeCategory}
						onCategoryClick={handleCategoryClick}
					/>
				</ul>
			</div>
		</nav>
	);
};
