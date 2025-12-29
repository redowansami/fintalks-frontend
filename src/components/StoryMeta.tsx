interface StoryMetaProps {
	username: string;
	createdAt: string;
	updatedAt?: string;
}

export const StoryMeta: React.FC<StoryMetaProps> = ({ username, createdAt, updatedAt }) => {
	const formattedDate = new Date(createdAt).toLocaleDateString();

	return (
		<div className="story-meta">
			By {username} | Created: {formattedDate}
			{updatedAt && ` | Updated: ${new Date(updatedAt).toLocaleDateString()}`}
		</div>
	);
};
