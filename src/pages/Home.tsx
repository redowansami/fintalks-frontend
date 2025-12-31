import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StoryListSection } from '../components/StoryListSection';
import { HomeSidebar } from '../components/HomeSidebar';
import { useStoryList } from '../hooks/useStoryList';
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
