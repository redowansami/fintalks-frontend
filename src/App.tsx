import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register, Login, HomePage, StoryDetail, Profile } from './pages';
import { CategoryContextProvider } from './wrappers/categoryContextProvider';
import './styles/App.css';

function App() {
	return (
		<CategoryContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/api/v1/stories/:storyId" element={<StoryDetail />} />
				</Routes>
			</Router>
		</CategoryContextProvider>
	);
}

export default App;
