import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

export const GuestGuard = ({ children }: { children: React.JSX.Element }) => {
	const { isAuthenticated } = useAuthContext();

	if (isAuthenticated) {
		return <Navigate to="/" replace />;
	}

	return children;
};
