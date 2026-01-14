import { type ReactNode, useMemo } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthContext, type AuthContextType } from '../interfaces/services/auth';
import type { User } from '../interfaces/services/user';
import { AUTH_TOKENS, AUTH_QUERY_KEY } from '../constants/authConstants';
import { loadAuth } from '../utils/authLoader';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const queryClient = useQueryClient();

	const { data: authData = { token: null, user: null }, isPending } = useQuery({
		queryKey: AUTH_QUERY_KEY,
		queryFn: loadAuth,
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const value: AuthContextType = useMemo(
		() => ({
			user: authData.user,
			token: authData.token,
			loading: isPending,
			isAuthenticated: !!authData.token && !!authData.user,
			login: (newToken: string, newUser: User) => {
				localStorage.setItem(AUTH_TOKENS.TOKEN, newToken);
				localStorage.setItem(AUTH_TOKENS.USER, JSON.stringify(newUser));
				queryClient.setQueryData(AUTH_QUERY_KEY, { token: newToken, user: newUser });
			},
			logout: () => {
				localStorage.removeItem(AUTH_TOKENS.TOKEN);
				localStorage.removeItem(AUTH_TOKENS.USER);
				queryClient.setQueryData(AUTH_QUERY_KEY, { token: null, user: null });
			},
		}),
		[authData, isPending, queryClient],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
