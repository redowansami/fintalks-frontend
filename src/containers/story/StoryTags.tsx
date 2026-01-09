import '../../styles/story/StoryTags.css';

interface Category {
	categoryId: string;
	name: string;
}

interface StoryTagsProps {
	categories: Category[];
}

export const StoryTags: React.FC<StoryTagsProps> = ({ categories }) => {
	if (!categories || categories.length === 0) return null;

	return (
		<div className="story-tags">
			{categories.map((cat) => (
				<span key={cat.categoryId} className="story-tag">
					{cat.name}
				</span>
			))}
		</div>
	);
};
