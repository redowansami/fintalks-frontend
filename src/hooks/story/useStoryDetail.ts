import { useQuery } from '@tanstack/react-query';
import { storyService } from '../../services/storyService';
import type { UseStoryDetailReturn } from '../../interfaces/hooks/story';

export const useStoryDetail = (storyId?: string): UseStoryDetailReturn => {
	const { data, isPending, error } = useQuery({
		queryKey: ['story', storyId],
		queryFn: () => storyService.getStoryDetail(storyId!),
		enabled: !!storyId,
	});

	return {
		story: data || null,
		isPending: isPending,
		error: error as Error | null,
	};
};
