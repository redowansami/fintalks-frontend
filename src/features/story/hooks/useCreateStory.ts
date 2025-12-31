import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../../../hooks/useAuthContext';
import type { CreateStoryPayload } from '../services';
import { storyService, StoryError } from '../services';
import { uploadImageToImgbb } from '../../../services/imageUploadService';

interface UseCreateStoryResult {
	createStory: (
		title: string,
		body: string,
		imageFile: File | null,
		categoryIds: string[],
	) => Promise<void>;
	isLoading: boolean;
	error: string | null;
	validationErrors: Record<string, string | string[]> | null;
}

export const useCreateStory = (): UseCreateStoryResult => {
	const { token } = useAuthContext();
	const queryClient = useQueryClient();
	const [error, setError] = useState<string | null>(null);
	const [validationErrors, setValidationErrors] = useState<Record<
		string,
		string | string[]
	> | null>(null);

	const mutation = useMutation({
		mutationFn: async (payload: CreateStoryPayload) => {
			setError(null);
			setValidationErrors(null);
			if (!token) {
				throw new StoryError('No authentication token found');
			}
			return storyService.createStory(token, payload);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['stories'] });
		},
		onError: (err) => {
			if (err instanceof StoryError) {
				setError(err.message);
				if (err.validationErrors) {
					setValidationErrors(err.validationErrors);
				}
			} else {
				const errorMessage = err instanceof Error ? err.message : 'Failed to create story';
				setError(errorMessage);
			}
		},
	});

	return {
		createStory: async (
			title: string,
			body: string,
			imageFile: File | null,
			categoryIds: string[],
		) => {
			let imageUrl = '';
			if (imageFile) {
				imageUrl = await uploadImageToImgbb(imageFile);
			}
			return new Promise((resolve, reject) => {
				const payload: CreateStoryPayload = { title, body, categoryIds };
				if (imageUrl) {
					payload.imageUrl = imageUrl;
				}
				mutation.mutate(payload, {
					onSuccess: () => resolve(),
					onError: (err) => reject(err),
				});
			});
		},
		isLoading: mutation.isPending,
		error: error || (mutation.error instanceof Error ? mutation.error.message : null),
		validationErrors,
	};
};
