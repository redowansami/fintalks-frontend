import '../styles/SidebarComponents.css';

interface Mover {
	symbol: string;
	name: string;
	change: string;
	isPositive: boolean;
}

const movers: Mover[] = [
	{ symbol: 'NVDA', name: 'NVIDIA Corp', change: '+3.4%', isPositive: true },
	{ symbol: 'TSLA', name: 'Tesla Inc', change: '-1.2%', isPositive: false },
	{ symbol: 'AAPL', name: 'Apple Inc', change: '+0.5%', isPositive: true },
	{ symbol: 'AMZN', name: 'Amazon.com', change: '+1.8%', isPositive: true },
];

export const MarketMovers: React.FC = () => {
	return (
		<div className="top-movers">
			<div className="movers-header">
				<h3>Top Movers</h3>
			</div>
			{movers.map((mover) => (
				<div key={mover.symbol} className="mover-item">
					<div>
						<p className="mover-symbol">{mover.symbol}</p>
						<p className="mover-name">{mover.name}</p>
					</div>
					<span className={`mover-change ${mover.isPositive ? 'positive' : 'negative'}`}>
						{mover.change}
					</span>
				</div>
			))}
			<div className="movers-footer">
				<a href="#">View Market Data</a>
			</div>
		</div>
	);
};
