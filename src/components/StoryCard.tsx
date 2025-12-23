import '../styles/StoryCard.css';
import { useNavigate } from 'react-router-dom';

interface StoryCardProps {
	storyId: string;
	title: string;
	body: string;
	reliabilityScore: number;
	categories: Array<{ name: string }>;
	image?: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({
	storyId,
	title,
	body,
	reliabilityScore,
	categories,
	image,
}) => {
	const navigate = useNavigate();
	const handleClick = () => navigate(`/api/v1/stories/${storyId}`);
	const truncateText = (text: string, limit: number) => {
		return text.length > limit ? text.substring(0, limit) + '...' : text;
	};

	const scoreColor =
		reliabilityScore >= 80
			? 'var(--stock-green)'
			: reliabilityScore >= 60
			? '#f59e0b'
			: 'var(--stock-red)';

	const placeholderImage =
		'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23d4d4d8" width="300" height="200"/%3E%3C/svg%3E';

	return (
		<article className="story-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
			<img src={image || placeholderImage} alt={title} className="story-image" />
			<div className="story-content">
				<h3 className="story-title">{title}</h3>
				<div className="story-meta">
					{categories.map((cat, idx) => (
						<span
							key={idx}
							style={{
								fontWeight: 600,
								color: 'var(--secondary)',
								marginRight: '0.5rem',
							}}
						>
							{cat.name}
						</span>
					))}
				</div>
				<p className="story-excerpt">{truncateText(body, 200)}</p>
				<div className="reliability-section">
					<span style={{ fontSize: '0.875rem', fontWeight: 600, color: scoreColor }}>
						Reliability: {reliabilityScore}%
					</span>
					<div className="reliability-bar">
						<div
							className="reliability-fill"
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
