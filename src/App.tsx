import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register, Login, HomePage } from './pages';
import './styles/globals.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
