import { useMutation, useQueryClient } from '@tanstack/react-query';
import { storyService } from '../../services/storyService';
import { ApiError } from '../../services/apiClient';
import type { StoryInput } from '../../interfaces/services/story';
import type { UseCreateStoryResult } from '../../interfaces/hooks/story';

export const useCreateStory = (): UseCreateStoryResult => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (input: StoryInput) => storyService.createStory(input),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['stories'] });
		},
	});

	const validationErrors =
		mutation.error instanceof ApiError ? mutation.error.validationErrors : undefined;

	return {
		createStory: mutation.mutate,
		isPending: mutation.isPending,
		error: mutation.error instanceof Error ? mutation.error : null,
		isSuccess: mutation.isSuccess,
		validationErrors,
	};
};
