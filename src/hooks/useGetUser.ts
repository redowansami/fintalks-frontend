import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from './useAuthContext';
import { userService } from '../services/userService';
import { profileService } from '../services/profileService';

export const useGetUser = (userId?: string) => {
	const { user: currentUser } = useAuthContext();
	const isOwnProfile = !userId || userId === currentUser?.userId;

	return useQuery({
		queryKey: userId ? ['user', userId] : ['profile'],
		queryFn: async () => {
			if (isOwnProfile) {
				const response = await profileService.getProfile();
				return {
					user: response.profile,
					isOwnProfile: true,
				};
			} else {
				const response = await userService.getUserById(userId!);
				return {
					user: response.user,
					isOwnProfile: false,
				};
			}
		},
		staleTime: 1000 * 60 * 5,
	});
};
