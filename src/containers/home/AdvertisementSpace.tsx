import { Typography } from '../../components/Typography';
import '../../styles/containers/home/AdvertisementSpace.css';

export const AdvertisementSpace: React.FC = () => {
	return (
		<div className="ad-space">
			<Typography variant="muted">ADVERTISEMENT</Typography>
			<div className="ad-content">
				<Typography>Ad Space 300x250</Typography>
			</div>
		</div>
	);
};
