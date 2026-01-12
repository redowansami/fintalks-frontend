import { Typography } from '../../components/Typography';
import '../../styles/containers/home/MarketMovers.css';
import type { Mover } from '../../interfaces/containers/home';

const movers: Mover[] = [
	{ symbol: 'NVDA', name: 'NVIDIA Corp', change: '+3.4%', isPositive: true },
	{ symbol: 'TSLA', name: 'Tesla Inc', change: '-1.2%', isPositive: false },
	{ symbol: 'AAPL', name: 'Apple Inc', change: '+0.5%', isPositive: true },
	{ symbol: 'AMZN', name: 'Amazon.com', change: '+1.8%', isPositive: true },
];

export const MarketMovers: React.FC = () => {
	return (
		<div className="market-movers-card">
			<div className="market-movers-header">
				<Typography variant="h3" textAlign="center">
					Market Movers
				</Typography>
			</div>
			{movers.map((mover) => (
				<div key={mover.symbol} className="mover-row">
					<div>
						<Typography className="mover-symbol">{mover.symbol}</Typography>
						<Typography variant="xs" className="mover-name">
							{mover.name}
						</Typography>
					</div>
					<Typography
						variant="body"
						color={mover.isPositive ? 'success' : 'error'}
						className={
							mover.isPositive ? 'mover-change-positive' : 'mover-change-negative'
						}
					>
						{mover.change}
					</Typography>
				</div>
			))}
			<div className="market-movers-footer"> </div>
		</div>
	);
};
