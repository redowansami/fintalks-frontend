import { Header } from './common/Header';
import { Footer } from './common/Footer';

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
