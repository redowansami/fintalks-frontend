import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useStoryList } from '../hooks/story';

export const MainLayout = () => {
	const { activeCategory, handleCategoryClick } = useStoryList();
	const location = useLocation();

	const hideNavbarRoutes = ['/profile'];
	const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			{shouldShowNavbar && (
				<Navbar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
			)}
			<main className="grow">
				<Outlet context={{ activeCategory }} />
			</main>
			<Footer />
		</div>
	);
};
