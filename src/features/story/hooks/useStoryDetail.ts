import { useQuery } from '@tanstack/react-query';
import { storyService } from '../../../services/storyService';
import type { StoryDetail } from '../../../types/story';

interface UseStoryDetailReturn {
	story: StoryDetail | null;
	isLoading: boolean;
	error: Error | null;
}

export const useStoryDetail = (storyId?: string): UseStoryDetailReturn => {
	const { data, isPending, error } = useQuery({
		queryKey: ['story', storyId],
		queryFn: () => storyService.getStoryDetail(storyId!),
		enabled: !!storyId,
	});

	return {
		story: data || null,
		isLoading: isPending,
		error: error as Error | null,
	};
};
