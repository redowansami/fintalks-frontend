import { useMutation, useQueryClient } from '@tanstack/react-query';
import { storyService } from '../../services/storyService';

interface UseDeleteStoryResult {
	deleteStory: (storyId: string) => void;
	isPending: boolean;
	error: string | null;
	isSuccess: boolean;
}

export const useDeleteStory = (): UseDeleteStoryResult => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (storyId: string) => storyService.deleteStory(storyId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['stories'] });
		},
	});

	return {
		deleteStory: mutation.mutate,
		isPending: mutation.isPending,
		error: mutation.error instanceof Error ? mutation.error.message : null,
		isSuccess: mutation.isSuccess,
	};
};
