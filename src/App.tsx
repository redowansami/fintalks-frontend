import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Register, Login, HomePage, StoryDetail, Profile } from './pages';
import { AuthProvider } from './contexts/AuthContext';
import { CategoryProvider } from './contexts/CategoryContext';

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
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Register />} />
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
