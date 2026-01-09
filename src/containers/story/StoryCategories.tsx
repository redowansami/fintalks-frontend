import React from 'react';
import { useCategory } from '../../hooks/useCategory';
import '../../styles/containers/story/StoryCategories.css';
import { Typography } from '../../components/Typography';
import { Spinner } from '../../components/Spinner';
import { StoryCategoryCheckbox } from '../../components/CreateStoryComponents/StoryCategoryCheckbox';

interface StoryCategoriesProps {
	selectedIds: string[];
	onChange: (ids: string[]) => void;
}

export const StoryCategories: React.FC<StoryCategoriesProps> = ({ selectedIds, onChange }) => {
	const { categories, loading, error } = useCategory();

	const handleToggle = (id: string) => {
		onChange(
			selectedIds.includes(id)
				? selectedIds.filter((catId) => catId !== id)
				: [...selectedIds, id],
		);
	};

	if (loading) return <Spinner />;
	if (error) return <Typography color="error">Error loading categories</Typography>;

	return (
		<div>
			<Typography variant="body1">Categories</Typography>
			<div className="story-categories-grid">
				{categories.map((cat) => (
					<StoryCategoryCheckbox
						key={cat.categoryId}
						id={cat.categoryId}
						name={cat.name}
						checked={selectedIds.includes(cat.categoryId)}
						onChange={handleToggle}
					/>
				))}
			</div>
		</div>
	);
};
