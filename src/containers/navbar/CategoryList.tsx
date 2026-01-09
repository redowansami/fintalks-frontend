import { useCategory } from '../../hooks/useCategory';
import { TabButton } from '../../components/Buttons/TabButton';

interface CategoryListProps {
	activeCategory: string | null;
	onCategoryClick: (category: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({ activeCategory, onCategoryClick }) => {
	const { categories, loading } = useCategory();

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
