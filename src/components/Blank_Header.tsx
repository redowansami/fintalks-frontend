import '../styles/Header.css';

export const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header-content">
				<div className=".blank-header-left">
					<a className="logo" href="/">
						FinTalks
					</a>
				</div>
			</div>
		</header>
	);
};
