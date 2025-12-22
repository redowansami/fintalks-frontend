import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import { AIReliabilityCard } from '../components/AIReliabilityCard';
import '../styles/StoryDetail.css';

interface Story {
	storyId: string;
	title: string;
	body: string;
	reliabilityScore: number;
	summary?: string;
	predictionComparison?: string;
	categories: Array<{ categoryId: string; name: string }>;
	image?: string;
	imageUrl?: string;
	createdAt: string;
	updatedAt?: string;
}

export const StoryDetail: React.FC = () => {
	const { storyId } = useParams<{ storyId: string }>();
	const navigate = useNavigate();
	const [story, setStory] = useState<Story | null>(null);
	const [loading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const fetchStory = async () => {
			try {
				const res = await fetch(`http://localhost:3000/api/v1/stories/${storyId}`);
				const data = await res.json();
				setStory(data.story);
			} catch (err) {
				console.error('Error fetching story:', err);
				navigate('/');
			} finally {
				setLoading(false);
			}
		};

		if (storyId) fetchStory();
	}, [storyId, navigate]);

	if (loading) return <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p>;
	if (!story) return <p style={{ textAlign: 'center', padding: '2rem' }}>Story not found</p>;

	return (
		<>
			<Header />
			<Navbar />
			<div className="story-detail-wrapper">
				<main className="story-detail-main">
					<h1 className="story-title">{story.title}</h1>
					<img
						src={
							story.image ||
							story.imageUrl ||
							'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23d4d4d8" width="800" height="400"/%3E%3C/svg%3E'
						}
						alt={story.title}
						className="story-image"
					/>
					<div className="story-meta">
						Created: {new Date(story.createdAt).toLocaleDateString()}
					</div>{' '}
					<AIReliabilityCard
						reliabilityScore={story.reliabilityScore}
						summary={story.summary}
						predictionComparison={story.predictionComparison}
						onComparisonClick={() => setIsModalOpen(true)}
					/>{' '}
					<div className="story-content">
						<p className="story-body">{story.body}</p>
						<div className="story-tags">
							{story.categories &&
								story.categories.map((cat) => (
									<span key={cat.categoryId} className="story-tag">
										{cat.name}
									</span>
								))}
						</div>
					</div>
				</main>
			</div>
			<Footer />
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title="AI Prediction Comparison"
				message={story.predictionComparison || ''}
				actionButtonText="Close"
			/>
		</>
	);
};
