import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/containers/story/StoryCard.css';
import { Typography } from '../../components/Typography';
import { MarkdownPreview } from '../../components/MarkdownPreview';
import { Modal } from '../../components/Modal';
import { StoryActionsMenu } from './StoryActionsMenu';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDeleteStory } from '../../hooks/story';
import type { StoryCardProps } from '../../interfaces/containers/story';

export const StoryCard: React.FC<StoryCardProps> = ({
	storyId,
	title,
	body,
	reliabilityScore,
	categories,
	imageUrl,
	username,
	createdAt,
}) => {
	const navigate = useNavigate();
	const { user } = useAuthContext();
	const { deleteStory, isSuccess } = useDeleteStory();
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const isOwner = user?.username === username;
	const isAdmin = user?.role.includes('ADMIN');

	const handleClick = () => navigate(`/stories/${storyId}`);
	const handleEdit = () => navigate(`/stories/${storyId}/edit`);
	const handleDelete = () => {
		deleteStory(storyId);
		setShowSuccessModal(true);
	};

	const truncateText = (text: string, limit: number) => {
		return text.length > limit ? text.substring(0, limit) + '...' : text;
	};

	const formatDate = (dateString: string) => {
		const isoString = dateString.replace(' ', 'T');
		const dateObj = new Date(isoString);

		return new Intl.DateTimeFormat('en-GB', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		}).format(dateObj);
	};

	const scoreColor =
		reliabilityScore >= 80
			? 'var(--color-stock-green)'
			: reliabilityScore >= 60
			? '#f59e0b'
			: 'var(--color-stock-red)';

	const placeholderImage =
		'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23d4d4d8" width="300" height="200"/%3E%3C/svg%3E';

	return (
		<article className="story-card" onClick={handleClick}>
			<div className="story-card-header">
				<img src={imageUrl || placeholderImage} alt={title} className="story-card-image" />
			</div>
			{(isOwner || isAdmin) && (
				<div className="story-card-actions" onClick={(e) => e.stopPropagation()}>
					<StoryActionsMenu
						isOwner={isOwner}
						onEdit={handleEdit}
						onDelete={handleDelete}
					/>
				</div>
			)}
			<div className="story-card-content">
				<Typography variant="h3">{title}</Typography>

				<Typography variant="xs" className="flex items-center gap-4">
					<Icon icon="mdi:user" /> {username}
					<Icon icon="mdi:calendar" /> {formatDate(createdAt)}
				</Typography>

				<Typography variant="xs">{categories.map((cat) => cat.name).join(' ')}</Typography>

				<Typography variant="body">
					<MarkdownPreview content={truncateText(body, 150)} />
				</Typography>

				<div className="story-card-reliability">
					<span className="story-card-reliability-score" style={{ color: scoreColor }}>
						Reliability: {reliabilityScore}%
					</span>

					<div className="story-card-reliability-bar">
						<div
							className="story-card-reliability-fill"
							style={{
								width: `${reliabilityScore}%`,
								backgroundColor: scoreColor,
							}}
						></div>
					</div>
				</div>
			</div>
			<Modal
				isOpen={isSuccess && showSuccessModal}
				onClose={() => setShowSuccessModal(false)}
				title="Success"
				message="Story deleted successfully"
			/>
		</article>
	);
};
