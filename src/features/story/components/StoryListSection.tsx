import { StoryCard } from './StoryCard';
import type { Story } from '../services';
import '../styles/StoryList.css';

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
		<section className="story-list-section">
			<div className="story-list-header">
				<h2 className="story-list-title">{pageTitle}</h2>
			</div>
			{isPending ? (
				<p>Loading...</p>
			) : stories && stories.length > 0 ? (
				<div className="story-list-container">
					{stories.map((story) => (
						<StoryCard
							key={story.storyId}
							storyId={story.storyId}
							title={story.title}
							body={story.body}
							reliabilityScore={story.reliabilityScore}
							categories={story.categories}
							image={story.imageUrl}
							username={story.username}
							createdAt={story.createdAt}
						/>
					))}
				</div>
			) : (
				<p className="story-list-empty">No articles found</p>
			)}
		</section>
	);
};
