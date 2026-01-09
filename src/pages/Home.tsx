import { StoryListSection } from '../container/story';
import { HomeSidebar } from '../features/home/components';
import { useStoryList } from '../hooks/story';
import '../styles/HomePage.css';

export const HomePage: React.FC = () => {
	const {
		stories,
		activeCategory,
		isPending,
		isFetchingNextPage,
		pageTitle,
		hasNextPage,
		handleLoadMore,
	} = useStoryList();

	return (
		<div className={`main-content ${activeCategory ? 'no-sidebar' : ''}`}>
			<StoryListSection
				stories={stories}
				isPending={isPending}
				isLoadingMore={isFetchingNextPage}
				pageTitle={pageTitle}
				hasNextPage={hasNextPage}
				onLoadMore={handleLoadMore}
			/>
			<HomeSidebar show={!activeCategory} />
		</div>
	);
};
