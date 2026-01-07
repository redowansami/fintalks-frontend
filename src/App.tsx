import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './Route/routes';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router>
					<AppRoutes />
				</Router>
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
