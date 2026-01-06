import { Typography } from '../../../components/Typography';

interface StoryMetaProps {
	username: string;
	createdAt: string;
	updatedAt?: string;
}

export const StoryMeta: React.FC<StoryMetaProps> = ({ username, createdAt, updatedAt }) => {
	const createDate = new Date(createdAt).toLocaleDateString();
	const UpdateDate = updatedAt ? new Date(updatedAt).toLocaleDateString() : null;

	return (
		<div>
			<Typography variant="muted">
				By {username} | Created: {createDate}
				{updatedAt && ` | Updated: ${UpdateDate}`}
			</Typography>
		</div>
	);
};
