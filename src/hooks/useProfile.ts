import { useQuery } from '@tanstack/react-query';
import { getAuth } from '../utils/authUtils';
import { fetchProfile } from '../services/profileService';

export const useProfile = () => {
	const { token } = getAuth();

	return useQuery({
		queryKey: ['profile', token],
		queryFn: () => fetchProfile(token),
		enabled: !!token,
	});
};
