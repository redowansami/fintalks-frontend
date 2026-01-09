import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { AIReliabilityCard } from '../containers/story/AIReliabilityCard';
import { StoryMeta, StoryImage, StoryTags, StoryActionsMenu } from '../containers/story';
import { useStoryDetail } from '../hooks/story';
import { Spinner } from '../components';
import { Typography } from '../components/Typography';
import { MarkdownPreview } from '../components/MarkdownPreview';
import { useAuthContext } from '../hooks/useAuthContext';

export const StoryDetail: React.FC = () => {
	const { storyId } = useParams<{ storyId: string }>();
	const navigate = useNavigate();

	const { user } = useAuthContext();
	const { story, isPending, error } = useStoryDetail(storyId);
	const [isModalOpen, setIsModalOpen] = useState(false);

	if (isPending) return <Spinner />;
	if (error || !story) {
		navigate('/');
		return null;
	}

	const isOwner = user?.username === story.username;

	const handleEdit = () => {
		navigate(`/stories/${storyId}/edit`);
	};

	const handleDelete = () => {
		console.log('Delete story:', storyId);
	};

	return (
		<>
			<div className="w-full max-w-3xl mx-auto px-4 py-10">
				<div className="flex justify-between items-start gap-4 mb-5">
					<Typography variant="h1">{story.title}</Typography>
					{isOwner && <StoryActionsMenu onEdit={handleEdit} onDelete={handleDelete} />}
				</div>
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
