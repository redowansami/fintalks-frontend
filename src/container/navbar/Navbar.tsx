import { CategoryList } from './CategoryList';
import { List } from '../../components/List';
import '../../styles/Navbar.css';
import { TabButton } from '../../components/Buttons/TabButton';

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
			<List className="nav-list">
				<TabButton
					variant="pill"
					isActive={!activeCategory}
					onClick={() => handleCategoryClick(null)}
				>
					Home
				</TabButton>
				<CategoryList
					activeCategory={activeCategory}
					onCategoryClick={handleCategoryClick}
				/>
			</List>
		</nav>
	);
};
