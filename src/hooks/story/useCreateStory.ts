import { useMutation, useQueryClient } from '@tanstack/react-query';
import { storyService } from '../../services/storyService';
import { ApiError } from '../../lib/apiClient';
import type { CreateStoryInput } from '../../types/story';

interface UseCreateStoryResult {
	createStory: (input: CreateStoryInput) => void;
	isLoading: boolean;
	error: string | null;
	validationErrors?: Record<string, string | string[]>;
}

export const useCreateStory = (): UseCreateStoryResult => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (input: CreateStoryInput) => storyService.createStory(input),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['stories'] });
		},
	});

	const validationErrors =
		mutation.error instanceof ApiError ? mutation.error.validationErrors : undefined;

	return {
		createStory: mutation.mutate,
		isLoading: mutation.isPending,
		error: mutation.error instanceof Error ? mutation.error.message : null,
		validationErrors,
	};
};
