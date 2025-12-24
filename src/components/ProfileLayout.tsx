import { Header } from './Header';
import { Footer } from './Footer';

interface ProfileLayoutProps {
	children: React.ReactNode;
}

export const ProfileLayout = ({ children }: ProfileLayoutProps) => (
	<>
		<Header />
		<main className="profile-main">
			<div className="profile-container">{children}</div>
		</main>
		<Footer />
	</>
);
