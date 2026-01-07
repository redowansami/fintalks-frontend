import React from 'react';
import { useCategoryContext } from '../../../../hooks/useCategoryContext';
import '../../styles/StoryCategories.css';
import { Typography } from '../../../../components/Typography';
import { Spinner } from '../../../../components';

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

	if (loading) return <Spinner />;
	if (error) return <Typography color="error">Error loading categories</Typography>;

	return (
		<div>
			<Typography variant="body1">Categories</Typography>
			<div className="story-categories-grid">
				{categories.map((cat) => (
					<label key={cat.categoryId} className="story-categories-label">
						<input
							type="checkbox"
							checked={selectedIds.includes(cat.categoryId)}
							onChange={() => handleToggle(cat.categoryId)}
							className="story-categories-checkbox"
						/>
						<Typography>{cat.name}</Typography>
					</label>
				))}
			</div>
		</div>
	);
};
