import { useState, useEffect } from 'react';
import { NavLink } from './NavLink';

interface Category {
	id: string;
	name: string;
	slug?: string;
}

interface CategoryListProps {
	activeCategory: string | null;
	onCategoryClick: (category: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({ activeCategory, onCategoryClick }) => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/categories/')
			.then((res) => res.json())
			.then((data) => {
				const catArray = Array.isArray(data) ? data : data?.data || data?.categories || [];
				setCategories(catArray);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error fetching categories:', err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return null;
	}

	return (
		<>
			{categories && Array.isArray(categories)
				? categories.map((cat) => {
						const categoryKey = cat.slug || cat.name.toLowerCase();
						return (
							<NavLink
								key={cat.id}
								label={cat.name}
								isActive={activeCategory === categoryKey}
								onClick={() => onCategoryClick(categoryKey)}
							/>
						);
				  })
				: null}
		</>
	);
};
