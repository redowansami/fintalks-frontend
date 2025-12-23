import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BlogListSection } from '../components/BlogListSection';
import { HomeSidebar } from '../components/HomeSidebar';
import { useStoryList } from '../hooks/useStoryList';
import '../styles/HomePage.css';

export const HomePage: React.FC = () => {
	const { blogs, activeCategory, isPending, pageTitle, handleCategoryClick } = useStoryList();

	return (
		<>
			<Header />
			<Navbar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
			<main className="homepage">
				<div className={`main-content ${activeCategory ? 'no-sidebar' : ''}`}>
					<div>
						<BlogListSection
							blogs={blogs}
							isPending={isPending}
							pageTitle={pageTitle}
						/>
					</div>
					<HomeSidebar show={!activeCategory} />
				</div>
			</main>
			<Footer />
		</>
	);
};
