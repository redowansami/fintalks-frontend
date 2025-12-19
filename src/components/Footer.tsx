import '../styles/Footer.css';

export const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-info">
					<span className="footer-logo">FinTalks</span>
					<p className="footer-text">© 2025 Cefalo Bangladesh Ltd</p>
					<p className="footer-text" style={{ fontSize: '0.75rem' }}>
						House no: 26, Road no: 05, Dhaka 1205
					</p>
				</div>
			</div>
		</footer>
	);
};
