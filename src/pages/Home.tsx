import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StoryListSection } from '../features/story/components';
import { HomeSidebar } from '../features/home/components';
import { useStoryList } from '../features/story/hooks';
import '../styles/HomePage.css';

export const HomePage: React.FC = () => {
	const {
		stories,
		activeCategory,
		isPending,
		isFetchingNextPage,
		pageTitle,
		hasNextPage,
		handleCategoryClick,
		handleLoadMore,
	} = useStoryList();

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Navbar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
			<main className="homepage grow">
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
			</main>
			<Footer />
		</div>
	);
};
