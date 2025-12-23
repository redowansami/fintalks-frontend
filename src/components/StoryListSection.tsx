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
		<section className="px-4 py-8">
			<div className="mb-12">
				<h2 className="text-3xl font-bold">{pageTitle}</h2>
			</div>
			<br />
			{isPending ? (
				<p>Loading...</p>
			) : stories && stories.length > 0 ? (
				<div className="flex flex-col gap-6">
					{stories.map((story) => (
						<StoryCard
							key={story.storyId}
							storyId={story.storyId}
							title={story.title}
							body={story.body}
							reliabilityScore={story.reliabilityScore}
							categories={story.categories}
							image={story.imageUrl}
						/>
					))}
				</div>
			) : (
				<p>No articles found</p>
			)}
		</section>
	);
};
