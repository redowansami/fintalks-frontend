interface StoryMetaProps {
	createdAt: string;
	updatedAt?: string;
}

export const StoryMeta: React.FC<StoryMetaProps> = ({ createdAt, updatedAt }) => {
	const formattedDate = new Date(createdAt).toLocaleDateString();

	return (
		<div className="story-meta">
			Created: {formattedDate}
			{updatedAt && ` | Updated: ${new Date(updatedAt).toLocaleDateString()}`}
		</div>
	);
};
