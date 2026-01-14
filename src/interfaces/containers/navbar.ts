export interface CategoryListProps {
	activeCategory: string | null;
	onCategoryClick: (category: string | null) => void;
}
