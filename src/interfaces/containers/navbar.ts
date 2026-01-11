export interface CategoryListProps {
	activeCategory: string | null;
	onCategoryClick: (category: string) => void;
}

export interface NavbarProps {
	activeCategory?: string | null;
	onCategoryClick?: (category: string | null) => void;
}
