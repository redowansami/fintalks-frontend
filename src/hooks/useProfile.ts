import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from './useAuthContext';
import { fetchProfile } from '../services/profileService';

export const useProfile = () => {
	const { token } = useAuthContext();
	return useQuery({
		queryKey: ['profile', token],
		queryFn: () => fetchProfile(token),
		enabled: !!token,
	});
};
