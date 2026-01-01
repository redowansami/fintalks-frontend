import { Button } from '../../../components/Button';
import '../styles/AIReliabilityCard.css';

interface AIReliabilityCardProps {
	reliabilityScore: number;
	summary?: string;
	predictionComparison?: string;
	onComparisonClick?: () => void;
}

export const AIReliabilityCard: React.FC<AIReliabilityCardProps> = ({
	reliabilityScore,
	summary,
	predictionComparison,
	onComparisonClick,
}) => {
	const scoreColor =
		reliabilityScore >= 80
			? 'var(--stock-green)'
			: reliabilityScore >= 60
			? '#f59e0b'
			: 'var(--stock-red)';

	return (
		<div className="ai-reliability-card">
			<div className="ai-score-section">
				<div className="ai-score-header">
					<div className="ai-score-title">
						<span>AI Reliability Score</span>
					</div>
					<span className="ai-score-value" style={{ color: scoreColor }}>
						{reliabilityScore}%
					</span>
				</div>
				<div className="ai-score-bar">
					<div
						className="ai-score-fill"
						style={{
							width: `${reliabilityScore}%`,
							backgroundColor: scoreColor,
						}}
					></div>
				</div>
				<p className="ai-score-description">
					Score calculated based on source credibility, historical accuracy, and
					cross-referenced data points.
				</p>
			</div>
			{summary && (
				<div className="ai-summary-section">
					<h3 className="ai-summary-title">AI Summary</h3>
					<p className="ai-summary-text">{summary}</p>
				</div>
			)}
			{predictionComparison && (
				<Button variant="secondary" onClick={onComparisonClick}>
					AI Prediction Comparison
				</Button>
			)}
		</div>
	);
};
