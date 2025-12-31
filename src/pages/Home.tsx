import { Header } from '../components/common/Header';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { StoryListSection } from '../features/story/components';
import { HomeSidebar } from '../features/home/components';
import { useStoryList } from '../features/story/hooks';
import '../styles/HomePage.css';

export const HomePage: React.FC = () => {
	const { stories, activeCategory, isPending, pageTitle, handleCategoryClick } = useStoryList();

	return (
		<>
			<Header />
			<Navbar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
			<main className="homepage">
				<div className={`main-content ${activeCategory ? 'no-sidebar' : ''}`}>
					<StoryListSection
						stories={stories}
						isPending={isPending}
						pageTitle={pageTitle}
					/>
					<HomeSidebar show={!activeCategory} />
				</div>
			</main>
			<Footer />
		</>
	);
};
