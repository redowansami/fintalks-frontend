import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { AIReliabilityCard } from '../containers/story/AIReliabilityCard';
import { StoryMeta, StoryImage, StoryTags } from '../containers/story';
import { useStoryDetail } from '../hooks/story';
import { Spinner } from '../components';
import { Typography } from '../components/Typography';
import { MarkdownPreview } from '../components/MarkdownPreview';

export const StoryDetail: React.FC = () => {
	const { storyId } = useParams<{ storyId: string }>();
	const navigate = useNavigate();
	const { story, isPending, error } = useStoryDetail(storyId);
	const [isModalOpen, setIsModalOpen] = useState(false);

	if (isPending) return <Spinner />;
	if (error || !story) {
		navigate('/');
		return null;
	}

	return (
		<>
			<div className="w-full max-w-3xl mx-auto px-4 py-10">
				<Typography variant="h1" className="mb-5">
					{story.title}
				</Typography>
				<StoryImage src={story.imageUrl} alt={story.title} />
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
				<MarkdownPreview content={story.body} />
				<StoryTags categories={story.categories} />
			</div>
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
