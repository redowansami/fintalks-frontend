import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register, Login, HomePage, StoryDetail } from './pages';
import './styles/globals.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/api/v1/stories/:storyId" element={<StoryDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
