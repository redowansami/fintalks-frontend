import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { StoryListSection } from '../containers/story';
import { useSearchStories } from '../hooks/story/useSearchStories';

export const SearchPage: React.FC = () => {
	const {
		searchTerm,
		setSearchTerm,
		stories,
		isPending,
		isFetchingNextPage,
		pageTitle,
		hasNextPage,
		handleLoadMore,
	} = useSearchStories();

	return (
		<div className="w-full min-h-screen flex flex-col justify-start items-center px-4 py-8 md:py-12 bg-gray-50/30">
			<div className="w-full max-w-3xl mx-auto mb-8">
				<SearchBar
					placeholder="Search by title, author, or tag..."
					value={searchTerm}
					onChange={setSearchTerm}
				/>
			</div>

			<div className="w-full max-w-7xl">
				<StoryListSection
					stories={stories}
					isPending={isPending}
					isLoadingMore={isFetchingNextPage}
					pageTitle={pageTitle}
					hasNextPage={hasNextPage}
					onLoadMore={handleLoadMore}
				/>
			</div>
		</div>
	);
};
