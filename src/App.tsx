import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Register, Login, HomePage, StoryDetail, Profile } from './pages';
import { AuthProvider } from './contexts/AuthContext';
import { CategoryProvider } from './contexts/CategoryContext';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<CategoryProvider>
					<Router>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/signup" element={<Register />} />
							<Route path="/login" element={<Login />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/api/v1/stories/:storyId" element={<StoryDetail />} />
						</Routes>
					</Router>
				</CategoryProvider>
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
