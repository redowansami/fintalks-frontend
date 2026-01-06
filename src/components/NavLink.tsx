interface NavLinkProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ label, isActive, onClick }) => {
	return (
		<button onClick={onClick} className={`nav-link ${isActive ? 'active' : ''}`}>
			{label}
		</button>
	);
};
