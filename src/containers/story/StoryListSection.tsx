import { StoryCard } from './StoryCard';
import { Spinner } from '../../components/Spinner';
import { Button } from '../../components/Buttons/Button';
import type { StoryListSectionProps } from '../../interfaces/containers/story';
import '../../styles/containers/story/StoryList.css';
import { Typography } from '../../components/Typography';

export const StoryListSection: React.FC<StoryListSectionProps> = ({
	stories,
	isPending,
	isPendingMore,
	pageTitle,
	hasNextPage,
	onLoadMore,
}) => {
	return (
		<section className="story-list-section">
			<Typography variant="h2">{pageTitle}</Typography>
			{isPending ? (
				<Spinner />
			) : stories.length > 0 ? (
				<>
					<div className="story-list-container">
						{stories.map((story) => (
							<StoryCard
								key={story.storyId}
								storyId={story.storyId}
								title={story.title}
								body={story.body}
								reliabilityScore={story.reliabilityScore}
								categories={story.categories}
								imageUrl={story.imageUrl}
								username={story.username}
								createdAt={story.createdAt}
							/>
						))}
					</div>
					{isPendingMore && <Spinner />}
					{hasNextPage && (
						<div className="story-list-footer">
							<Button variant="primary" onClick={onLoadMore} disabled={isPendingMore}>
								Load More
							</Button>
						</div>
					)}
				</>
			) : (
				<Typography textAlign="center" color="error">
					No stories found.
				</Typography>
			)}
		</section>
	);
};
