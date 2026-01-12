import { Typography } from '../../components/Typography';
import type { StoryMetaProps } from '../../interfaces/containers/story';

export const StoryMeta: React.FC<StoryMetaProps> = ({ username, createdAt, updatedAt }) => {
	const createDate = new Date(createdAt).toLocaleDateString();
	const UpdateDate = updatedAt ? new Date(updatedAt).toLocaleDateString() : null;

	return (
		<div>
			<Typography variant="muted" className="mb-4">
				By {username} | Created: {createDate}
				{updatedAt && ` | Updated: ${UpdateDate}`}
			</Typography>
		</div>
	);
};
