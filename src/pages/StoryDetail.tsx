import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import { AIReliabilityCard } from '../features/story/components/AIReliabilityCard';
import { StoryMeta, StoryImage, StoryTags } from '../features/story/components';
import { useStoryDetail } from '../features/story/hooks';
import '../features/story/styles/StoryDetail.css';

export const StoryDetail: React.FC = () => {
	const { storyId } = useParams<{ storyId: string }>();
	const navigate = useNavigate();
	const { story, loading, error } = useStoryDetail(storyId);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);

	const handleCategoryClick = (category: string | null) => {
		setActiveCategory(category);
		navigate('/', { state: { selectedCategory: category } });
	};

	if (loading) return <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p>;
	if (error || !story) {
		navigate('/');
		return null;
	}

	return (
		<>
			<Header />
			<Navbar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
			<div className="story-detail-wrapper">
				<main className="story-detail-main">
					<h1 className="story-title">{story.title}</h1>
					<StoryImage src={story.image || story.imageUrl} alt={story.title} />
					<StoryMeta
						username={story.username}
						createdAt={story.createdAt}
						updatedAt={story.updatedAt}
					/>
					<AIReliabilityCard
						reliabilityScore={story.reliabilityScore}
						summary={story.summary}
						predictionComparison={story.predictionComparison}
						onComparisonClick={() => setIsModalOpen(true)}
					/>
					<div className="story-content">
						<p className="story-body">{story.body}</p>
						<StoryTags categories={story.categories} />
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
