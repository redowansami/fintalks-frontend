import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthFormLayout, LoginSection, RegisterSection } from '../container/auth';
import { useAuthContext } from '../hooks/useAuthContext';

export const Auth = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { isAuthenticated, loading } = useAuthContext();
	const isLoginPage = location.pathname === '/login';

	useEffect(() => {
		if (!loading && isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, loading, navigate]);

	return (
		<div className="layout-center">
			<AuthFormLayout
				title={isLoginPage ? 'Log in' : 'Register'}
				subtitle={!isLoginPage ? 'Join Us!!' : undefined}
				footerText={isLoginPage ? "Don't have an account?" : 'Already have an account?'}
				footerLink={isLoginPage ? '/signup' : '/login'}
				footerLinkText={isLoginPage ? 'Sign Up' : 'Log in'}
			>
				{isLoginPage ? <LoginSection /> : <RegisterSection />}
			</AuthFormLayout>
		</div>
	);
};
