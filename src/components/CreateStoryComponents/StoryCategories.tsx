import { STORY_CATEGORIES } from '../../constants/storyConstants';

interface StoryCategoriesProps {
	selectedIds: string[];
	onChange: (ids: string[]) => void;
}

export const StoryCategories: React.FC<StoryCategoriesProps> = ({ selectedIds, onChange }) => {
	const handleToggle = (id: string) => {
		onChange(
			selectedIds.includes(id)
				? selectedIds.filter((catId) => catId !== id)
				: [...selectedIds, id],
		);
	};

	return (
		<div>
			<label className="form-label">Categories</label>
			<div className="categories-grid">
				{STORY_CATEGORIES.map((cat) => (
					<label key={cat.id} className="category-checkbox">
						<input
							type="checkbox"
							checked={selectedIds.includes(cat.id)}
							onChange={() => handleToggle(cat.id)}
						/>
						<span>{cat.name}</span>
					</label>
				))}
			</div>
		</div>
	);
};
