import { Typography } from '../components/Typography';
import '../styles/containers/Footer.css';

export const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<Typography component="span" className="footer-logo">
				FinTalks
			</Typography>
			<Typography variant="muted" className="footer-text">
				© 2025 Cefalo Bangladesh Ltd
			</Typography>
			<Typography variant="muted" className="footer-address">
				House no: 26, Road no: 05, Dhaka 1205
			</Typography>
		</footer>
	);
};
