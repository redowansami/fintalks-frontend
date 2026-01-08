import { NavLink } from './Buttons/NavLink';
import { useCategoryContext } from '../hooks/useCategoryContext';

interface CategoryListProps {
	activeCategory: string | null;
	onCategoryClick: (category: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({ activeCategory, onCategoryClick }) => {
	const { categories, loading } = useCategoryContext();

	if (loading) {
		return null;
	}

	return (
		<>
			{categories?.map((cat) => {
				const categoryKey = cat.name.toLowerCase();
				return (
					<NavLink
						key={cat.categoryId}
						label={cat.name}
						isActive={activeCategory === categoryKey}
						onClick={() => onCategoryClick(categoryKey)}
					/>
				);
			})}
		</>
	);
};
