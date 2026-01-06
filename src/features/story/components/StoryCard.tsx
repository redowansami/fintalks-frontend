import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import '../styles/StoryCard.css';
import { Typography } from '../../../components/Typography';

interface StoryCardProps {
	storyId: string;
	title: string;
	body: string;
	reliabilityScore: number;
	categories: Array<{ name: string }>;
	image?: string;
	username: string;
	createdAt: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({
	storyId,
	title,
	body,
	reliabilityScore,
	categories,
	image,
	username,
	createdAt,
}) => {
	const navigate = useNavigate();
	const handleClick = () => navigate(`/api/v1/stories/${storyId}`);
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
			<img src={image || placeholderImage} alt={title} className="story-card-image" />
			<div className="story-card-content">
				<Typography variant="h3">{title}</Typography>

				<Typography variant="xs" className="flex items-center gap-4">
					<Icon icon="mdi:user" /> {username}
					<Icon icon="mdi:calendar" /> {formatDate(createdAt)}
				</Typography>

				<Typography variant="xs">{categories.map((cat) => cat.name).join(' ')}</Typography>

				<Typography variant="body">{truncateText(body, 200)}</Typography>

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
		</article>
	);
};
