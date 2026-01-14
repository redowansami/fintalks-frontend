import React from 'react';
import { StoryListSection } from '../story/StoryListSection';
import { useUserStories } from '../../hooks/story/useUserStories';
import '../../styles/containers/profile/ProfileStories.css';
import type { ProfileStoriesProps } from '../../interfaces/containers/profile';

export const ProfileStories: React.FC<ProfileStoriesProps> = ({ userId = '' }) => {
	const { stories, isPending, isFetchingNextPage, pageTitle, hasNextPage, handleLoadMore } =
		useUserStories({ userId });

	return (
		<section className="profile-stories-section">
			<StoryListSection
				stories={stories}
				isPending={isPending}
				isPendingMore={isFetchingNextPage}
				pageTitle={pageTitle}
				hasNextPage={hasNextPage}
				onLoadMore={handleLoadMore}
			/>
		</section>
	);
};
