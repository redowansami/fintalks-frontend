import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

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
			? 'var(--stock-green)'
			: reliabilityScore >= 60
			? '#f59e0b'
			: 'var(--stock-red)';

	const placeholderImage =
		'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23d4d4d8" width="300" height="200"/%3E%3C/svg%3E';

	return (
		<article
			className="flex flex-col sm:flex-row gap-6 mb-12 cursor-pointer transition-all"
			onClick={handleClick}
		>
			<img
				src={image || placeholderImage}
				alt={title}
				className="w-full sm:w-1/3 h-40 object-cover rounded-lg shadow-sm flex-shrink-0 transition-shadow"
			/>
			<div className="flex flex-col justify-start sm:w-2/3 gap-1">
				<h3
					className="text-xl font-bold mb-2 transition-colors hover:text-[var(--secondary)]"
					style={{ color: 'var(--primary)' }}
				>
					{title}
				</h3>
				<div
					className="text-xs mb-3 flex items-center gap-3"
					style={{ color: 'var(--text-muted-light)' }}
				>
					<div className="flex items-center gap-1">
						<Icon icon="mdi:user" /> {username}
					</div>
					<span>•</span>
					<div className="flex items-center gap-1">
						<Icon icon="mdi:calendar" /> {formatDate(createdAt)}
					</div>
				</div>
				<div
					className="text-xs mb-3 flex flex-wrap gap-2"
					style={{ color: 'var(--text-muted-light)' }}
				>
					{categories.map((cat, idx) => (
						<span
							key={idx}
							className="font-semibold"
							style={{ color: 'var(--secondary)' }}
						>
							{cat.name}
						</span>
					))}
				</div>
				<p
					className="text-sm mb-3 line-clamp-3"
					style={{ color: 'var(--text-muted-light)' }}
				>
					{truncateText(body, 200)}
				</p>
				<div className="mt-4 flex items-center gap-3">
					<span className="text-sm font-semibold" style={{ color: scoreColor }}>
						Reliability: {reliabilityScore}%
					</span>
					<div
						className="w-[100px] h-2 rounded overflow-hidden"
						style={{ backgroundColor: 'var(--border-light)' }}
					>
						<div
							className="h-full transition-colors"
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
