import { Routes, Route } from 'react-router-dom';
import { HomePage, StoryDetail, Profile, EditStory, ViewAllUsers } from '../pages';
import { Auth } from '../pages/Auth';
import { MainLayout } from '../layouts/MainLayout';
import { PublicRoute } from './guards/PublicRoute';
import { ProtectedRoute } from './guards/ProtectedRoute';
import { CreateStory } from '../pages/CreateStory';

export const AppRoutes = () => (
	<Routes>
		<Route element={<PublicRoute />}>
			<Route path="/login" element={<Auth />} />
			<Route path="/signup" element={<Auth />} />
		</Route>
		<Route element={<MainLayout />}>
			<Route path="/" element={<HomePage />} />
			<Route path="/stories/:storyId" element={<StoryDetail />} />
			<Route path="/users" element={<ViewAllUsers />} />
			<Route element={<ProtectedRoute />}>
				<Route path="/categories/:category" element={<HomePage />} />
				<Route path="/create-story" element={<CreateStory />} />
				<Route path="/stories/:storyId/edit" element={<EditStory />} />
				<Route path="/profile" element={<Profile />} />
			</Route>
		</Route>
	</Routes>
);
