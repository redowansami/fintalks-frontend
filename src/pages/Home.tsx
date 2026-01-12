import { StoryListSection } from '../containers/story';
import { HomeSidebar } from '../containers/home';
import { useStoryList } from '../hooks/story';
import '../styles/pages/HomePage.css';

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
			<HomeSidebar isOpen={!activeCategory} onClose={() => {}} />
		</div>
	);
};
