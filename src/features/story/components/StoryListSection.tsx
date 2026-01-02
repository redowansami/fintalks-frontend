import { StoryCard } from './StoryCard';
import { Spinner } from '../../../components/Spinner';
import { Button } from '../../../components/Button';
import type { Story } from '../services';
import '../styles/StoryList.css';

interface StoryListSectionProps {
	stories: Story[];
	isPending: boolean;
	isLoadingMore: boolean;
	pageTitle: string;
	hasNextPage: boolean | undefined;
	onLoadMore: () => void;
}

export const StoryListSection: React.FC<StoryListSectionProps> = ({
	stories,
	isPending,
	isLoadingMore,
	pageTitle,
	hasNextPage,
	onLoadMore,
}) => {
	return (
		<section className="story-list-section">
			<div className="story-list-header">
				<h2 className="story-list-title">{pageTitle}</h2>
			</div>
			{isPending && stories.length === 0 ? (
				<Spinner />
			) : stories && stories.length > 0 ? (
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
								image={story.imageUrl}
								username={story.username}
								createdAt={story.createdAt}
							/>
						))}
					</div>
					{isLoadingMore && <Spinner />}
					{hasNextPage && (
						<div className="story-list-footer">
							<Button variant="primary" onClick={onLoadMore} disabled={isLoadingMore}>
								Load More
							</Button>
						</div>
					)}
				</>
			) : (
				<p className="story-list-empty">No articles found</p>
			)}
		</section>
	);
};
