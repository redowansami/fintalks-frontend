import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { uploadImageToImgbb } from '../../../services/imageUploadService';
import { updateProfile } from '../services';

interface UseProfilePictureUploadResult {
	uploadProfilePicture: (file: File) => Promise<void>;
	isLoading: boolean;
	error: string | null;
}

export const useProfilePictureUpload = (): UseProfilePictureUploadResult => {
	const { token } = useAuthContext();
	const queryClient = useQueryClient();
	const [error, setError] = useState<string | null>(null);

	const mutation = useMutation({
		mutationFn: async (file: File) => {
			setError(null);

			if (!file.type.startsWith('image/')) {
				throw new Error('Please select a valid image file');
			}

			const maxSize = 5 * 1024 * 1024;
			if (file.size > maxSize) {
				throw new Error('Image size must be less than 5MB');
			}

			const imageUrl = await uploadImageToImgbb(file);

			if (!token) {
				throw new Error('No authentication token found');
			}

			await updateProfile(token, {
				profilePictureUrl: imageUrl,
			});

			return imageUrl;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
		},
		onError: (err) => {
			const errorMessage =
				err instanceof Error ? err.message : 'Failed to upload profile picture';
			setError(errorMessage);
		},
	});

	return {
		uploadProfilePicture: async (file: File) => {
			return new Promise((resolve, reject) => {
				mutation.mutate(file, {
					onSuccess: () => resolve(),
					onError: (err) => reject(err),
				});
			});
		},
		isLoading: mutation.isPending,
		error: error || (mutation.error instanceof Error ? mutation.error.message : null),
	};
};
