import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

export const PublicRoute = () => {
	const { user } = useAuthContext();
	const location = useLocation();

	if (user) {
		const destination = location.state?.from?.pathname || '/';
		return <Navigate to={destination} replace />;
	}
	return <Outlet />;
};
