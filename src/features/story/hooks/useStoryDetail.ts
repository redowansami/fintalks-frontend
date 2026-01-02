import { useQuery } from '@tanstack/react-query';
import { storyService, type StoryDetail } from '../services';

interface UseStoryDetailReturn {
	story: StoryDetail | null;
	loading: boolean;
	error: Error | null;
}

export const useStoryDetail = (storyId?: string): UseStoryDetailReturn => {
	const { data, isPending, error } = useQuery({
		queryKey: ['story', storyId],
		queryFn: () => storyService.fetchStoryDetail(storyId!),
		enabled: !!storyId,
	});

	return {
		story: data?.story || null,
		loading: isPending,
		error: error || null,
	};
};
