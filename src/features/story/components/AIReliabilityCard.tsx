import { Button } from '../../../components/Button';
import { Typography } from '../../../components/Typography';
import '../styles/AIReliabilityCard.css';
import '../../../styles/variables.css';

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
					<Typography variant="h3" color="primary">
						AI Reliability Score
					</Typography>
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
				<Typography variant="xs" color="muted" className="ai-score-description">
					Score calculated based on source credibility, historical accuracy, and
					cross-referenced data points.
				</Typography>
			</div>
			{summary && (
				<div className="ai-summary-section">
					<Typography variant="h3" color="primary" className="mb-2">
						AI Summary
					</Typography>
					<Typography variant="body">{summary}</Typography>
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
