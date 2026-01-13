import { useMutation, useQueryClient } from '@tanstack/react-query';
import { storyService } from '../../services/storyService';
import { ApiError } from '../../services/apiClient';
import type { StoryInput } from '../../interfaces/common/story';

interface UseEditStoryResult {
	editStory: (storyId: string, input: StoryInput) => void;
	isLoading: boolean;
	error: string | null;
	isSuccess: boolean;
	validationErrors?: Record<string, string | string[]>;
}

export const useEditStory = (): UseEditStoryResult => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: ({ storyId, input }: { storyId: string; input: StoryInput }) =>
			storyService.updateStory(storyId, input),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['stories'] });
			queryClient.invalidateQueries({ queryKey: ['story'] });
		},
	});

	const validationErrors =
		mutation.error instanceof ApiError ? mutation.error.validationErrors : undefined;

	return {
		editStory: (storyId: string, input: StoryInput) => mutation.mutate({ storyId, input }),
		isLoading: mutation.isPending,
		error: mutation.error instanceof Error ? mutation.error.message : null,
		isSuccess: mutation.isSuccess,
		validationErrors,
	};
};
