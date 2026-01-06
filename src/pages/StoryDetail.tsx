import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import { AIReliabilityCard } from '../features/story/components/AIReliabilityCard';
import { StoryMeta, StoryImage, StoryTags } from '../features/story/components';
import { useStoryDetail } from '../features/story/hooks';
import { Spinner } from '../components';
import { Typography } from '../components/Typography';

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

	if (loading) return <Spinner />;
	if (error || !story) {
		navigate('/');
		return null;
	}

	return (
		<>
			<Header />
			<Navbar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />

			<main className="w-full max-w-3xl mx-auto px-4 py-10">
				<Typography variant="h1" className="mb-5">
					{story.title}
				</Typography>
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
				<Typography variant="body1" className="mb-3">
					{story.body}
				</Typography>
				<StoryTags categories={story.categories} />
			</main>
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
