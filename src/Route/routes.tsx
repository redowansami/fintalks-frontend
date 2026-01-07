import { Routes, Route, Outlet } from 'react-router-dom';
import { HomePage, StoryDetail, Profile } from '../pages';
import { Auth } from '../pages/Auth';
import { MainLayout } from '../layouts/MainLayout';
import { CategoryProvider } from '../contexts/CategoryContext';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';

const CategoryLayout = () => (
	<CategoryProvider>
		<Outlet />
	</CategoryProvider>
);

export const AppRoutes = () => (
	<Routes>
		<Route element={<PublicRoute />}>
			<Route path="/login" element={<Auth />} />
			<Route path="/signup" element={<Auth />} />
		</Route>
		<Route element={<CategoryLayout />}>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/stories/:storyId" element={<StoryDetail />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/categories/:category" element={<HomePage />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
			</Route>
		</Route>
	</Routes>
);
