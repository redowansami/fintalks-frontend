import { useNavigate } from 'react-router-dom';
import { Typography } from '../../components/Typography';
import { Icon } from '@iconify/react';
import '../../styles/containers/home/TopAuthors.css';
import { authors } from '../../constants/demoAuthors';

export const TopAuthors: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="top-authors-card">
			<div className="top-authors-header">
				<Typography variant="h3" textAlign="center">
					Top Authors
				</Typography>
			</div>
			{authors.map((author) => (
				<div key={author.id} className="author-row">
					<Icon icon="mingcute:user-4-line" className="author-icon" />
					<div className="author-info">
						<Typography className="author-name">{author.name}</Typography>
						<Typography variant="xs" className="author-username">
							{author.username}
						</Typography>
					</div>
				</div>
			))}
			<div className="top-authors-footer">
				<Typography variant="link" color="primary" onClick={() => navigate('/users')}>
					View All Users
				</Typography>
			</div>
		</div>
	);
};
