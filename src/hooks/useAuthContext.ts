import { useContext } from 'react';
import { AuthContext, type AuthContextType } from '../types/auth';

export const useAuthContext = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuthContext must be used within AuthContextProvider');
	}
	return context;
};
