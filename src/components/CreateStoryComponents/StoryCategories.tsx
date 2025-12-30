// import { STORY_CATEGORIES } from '../../constants/storyConstants';
import React from 'react';
import { useCategoryContext } from '../../hooks/useCategoryContext';

interface StoryCategoriesProps {
	selectedIds: string[];
	onChange: (ids: string[]) => void;
}

export const StoryCategories: React.FC<StoryCategoriesProps> = ({ selectedIds, onChange }) => {
	const { categories, loading, error } = useCategoryContext();

	const handleToggle = (id: string) => {
		onChange(
			selectedIds.includes(id)
				? selectedIds.filter((catId) => catId !== id)
				: [...selectedIds, id],
		);
	};

	if (loading) return <div>Loading categories...</div>;
	if (error) return <div>Error loading categories</div>;

	return (
		<div>
			<label className="form-label">Categories</label>
			<div className="categories-grid">
				{categories.map((cat) => (
					<label key={cat.categoryId} className="category-checkbox">
						<input
							type="checkbox"
							checked={selectedIds.includes(cat.categoryId)}
							onChange={() => handleToggle(cat.categoryId)}
						/>
						<span>{cat.name}</span>
					</label>
				))}
			</div>
		</div>
	);
};
