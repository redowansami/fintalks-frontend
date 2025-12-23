import { BlogCard } from './BlogCard';
import type { BlogStory } from '../services/storyService';

interface BlogListSectionProps {
	blogs: BlogStory[];
	isPending: boolean;
	pageTitle: string;
}

export const BlogListSection: React.FC<BlogListSectionProps> = ({
	blogs,
	isPending,
	pageTitle,
}) => {
	return (
		<section className="section">
			<div className="section-header">
				<h2 className="section-title">{pageTitle}</h2>
			</div>
			{isPending ? (
				<p>Loading...</p>
			) : blogs && blogs.length > 0 ? (
				blogs.map((blog) => (
					<BlogCard
						key={blog.storyId}
						storyId={blog.storyId}
						title={blog.title}
						body={blog.body}
						reliabilityScore={blog.reliabilityScore}
						categories={blog.categories}
						image={blog.imageUrl}
					/>
				))
			) : (
				<p>No articles found</p>
			)}
		</section>
	);
};
