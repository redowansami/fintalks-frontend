import { useMutation, useQueryClient } from '@tanstack/react-query';
import { profileService } from '../../services/profileService';
import { ApiError } from '../../lib/apiClient';

interface UseProfilePictureUploadResult {
	uploadProfilePicture: (file: File) => void;
	isLoading: boolean;
	error: string | null;
}

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
		isLoading: mutation.isPending,
		error: mutation.error instanceof ApiError ? mutation.error.message : null,
	};
};
