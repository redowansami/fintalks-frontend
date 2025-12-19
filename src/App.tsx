import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Register, Login } from './pages';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/signup" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Navigate to="/login" />} />
			</Routes>
		</Router>
	);
}

export default App;
