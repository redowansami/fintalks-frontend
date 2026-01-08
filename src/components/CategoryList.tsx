import { useCategoryContext } from '../hooks/useCategoryContext';
import { TabButton } from './Buttons/TabButton';

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
					<TabButton
						variant="pill"
						key={cat.categoryId}
						isActive={activeCategory === categoryKey}
						onClick={() => onCategoryClick(categoryKey)}
					>
						{cat.name}
					</TabButton>
				);
			})}
		</>
	);
};
