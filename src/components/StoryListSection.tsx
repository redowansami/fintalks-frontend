import { StoryCard } from './StoryCard';
import type { Story } from '../services/storyService';

interface StoryListSectionProps {
	stories: Story[];
	isPending: boolean;
	pageTitle: string;
}

export const StoryListSection: React.FC<StoryListSectionProps> = ({
	stories,
	isPending,
	pageTitle,
}) => {
	return (
		<section className="section">
			<div className="section-header">
				<h2 className="section-title">{pageTitle}</h2>
			</div>
			{isPending ? (
				<p>Loading...</p>
			) : stories && stories.length > 0 ? (
				stories.map((story) => (
					<StoryCard
						key={story.storyId}
						storyId={story.storyId}
						title={story.title}
						body={story.body}
						reliabilityScore={story.reliabilityScore}
						categories={story.categories}
						image={story.imageUrl}
					/>
				))
			) : (
				<p>No articles found</p>
			)}
		</section>
	);
};
