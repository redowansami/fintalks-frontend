import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { fetchProfile } from '../services';

export const useProfile = () => {
	const { token } = useAuthContext();
	return useQuery({
		queryKey: ['profile', token],
		queryFn: () => fetchProfile(token),
		enabled: !!token,
	});
};
