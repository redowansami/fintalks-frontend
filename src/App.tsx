import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomePage, StoryDetail, Profile } from './pages';
import { AuthProvider } from './contexts/AuthContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { GuestGuard } from './components/GuestGuard';
import { Auth } from './pages/Auth';

const CategoryLayout = () => (
	<CategoryProvider>
		<Outlet />
	</CategoryProvider>
);
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router>
					<Routes>
						<Route
							path="/login"
							element={
								<GuestGuard>
									<Auth />
								</GuestGuard>
							}
						/>
						<Route
							path="/signup"
							element={
								<GuestGuard>
									<Auth />
								</GuestGuard>
							}
						/>
						<Route element={<CategoryLayout />}>
							<Route path="/" element={<HomePage />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/api/v1/stories/:storyId" element={<StoryDetail />} />
						</Route>
					</Routes>
				</Router>
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
