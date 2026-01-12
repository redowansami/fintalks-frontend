import { useMutation, useQueryClient } from '@tanstack/react-query';
import { profileService } from '../../services/profileService';
import { ApiError } from '../../services/apiClient';
import type { UseProfilePictureUploadResult } from '../../interfaces/hooks/profile';

export const useProfilePictureUpload = (): UseProfilePictureUploadResult => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (file: File) => profileService.updateProfilePicture(file),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
		},
	});

	return {
		uploadProfilePicture: mutation.mutate,
		isPending: mutation.isPending,
		error: mutation.error instanceof ApiError ? mutation.error : null,
	};
};
