import { useState, useEffect, useTransition } from 'react';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BlogCard } from '../components/BlogCard';
import { TaxCalculator } from '../components/TaxCalculator';
import { AdvertisementSpace } from '../components/AdvertisementSpace';
import { MarketMovers } from '../components/MarketMovers';
import '../styles/HomePage.css';

interface Blog {
	storyId: string;
	title: string;
	body: string;
	summary: string;
	reliabilityScore: number;
	createdAt: string;
	categories: Array<{ name: string }>;
	image?: string;
	imageUrl?: string;
}

export const HomePage: React.FC = () => {
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		startTransition(async () => {
			const url = activeCategory
				? `http://localhost:3000/api/v1/stories?category=${activeCategory}`
				: 'http://localhost:3000/api/v1/stories/';

			try {
				const res = await fetch(url);
				const data = await res.json();
				const blogArray = data?.list || [];
				startTransition(() => {
					setBlogs(blogArray);
				});
			} catch (err) {
				console.error('Error fetching blogs:', err);
			}
		});
	}, [activeCategory]);

	const handleCategoryClick = (categoryName: string | null) => {
		setActiveCategory(categoryName);
	};

	const pageTitle = activeCategory
		? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
		: 'Latest Articles';

	return (
		<>
			<Header />
			<Navbar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
			<main className="homepage">
				<div className={`main-content ${activeCategory ? 'no-sidebar' : ''}`}>
					<div>
						<section className="section">
							<div className="section-header">
								<h2 className="section-title">{pageTitle}</h2>
								{activeCategory && (
									<button
										className="view-all-link"
										onClick={() => handleCategoryClick(null)}
									>
										View All
									</button>
								)}
							</div>
							{isPending ? (
								<p>Loading...</p>
							) : blogs && blogs.length > 0 ? (
								blogs.map((blog) => (
									<BlogCard
										key={blog.storyId}
										title={blog.title}
										body={blog.body}
										reliabilityScore={blog.reliabilityScore}
										categories={blog.categories}
										image={blog.image || blog.imageUrl}
									/>
								))
							) : (
								<p>No articles found</p>
							)}
						</section>
					</div>
					{!activeCategory && (
						<div className="sidebar">
							<TaxCalculator />
							<AdvertisementSpace />
							<MarketMovers />
						</div>
					)}
				</div>
			</main>
			<Footer />
		</>
	);
};
