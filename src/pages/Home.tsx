import { useState, useEffect } from 'react';
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
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/stories/')
			.then((res) => res.json())
			.then((data) => {
				const blogArray = data?.list || [];
				setBlogs(blogArray);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error fetching blogs:', err);
				setLoading(false);
			});
	}, []);

	return (
		<>
			<Header />
			<Navbar />
			<main className="homepage">
				<div className="main-content">
					<div>
						<section className="section">
							<div className="section-header">
								<h2 className="section-title">Latest Articles</h2>
								<a className="view-all-link" href="#">
									View All
								</a>
							</div>
							{loading ? (
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
					<div className="sidebar">
						<TaxCalculator />
						<AdvertisementSpace />
						<MarketMovers />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};
