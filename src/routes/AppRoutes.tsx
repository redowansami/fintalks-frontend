import { Routes, Route } from 'react-router-dom';
import { HomePage, StoryDetail, Profile } from '../pages';
import { Auth } from '../pages/Auth';
import { MainLayout } from '../layouts/MainLayout';
import { PublicRoute } from './guards/PublicRoute';
import { ProtectedRoute } from './guards/ProtectedRoute';
import { CategoryContextWrapper } from './wrappers/CategoryContextWrapper';


export const AppRoutes = () => (
	<Routes>
		<Route element={<PublicRoute />}>
			<Route path="/login" element={<Auth />} />
			<Route path="/signup" element={<Auth />} />
		</Route>
		<Route element={<CategoryContextWrapper />}>
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
