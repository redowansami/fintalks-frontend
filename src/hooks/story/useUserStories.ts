import { useInfiniteQuery } from '@tanstack/react-query';
import { storyService } from '../../services/storyService';
import type { UseStoryListReturn } from '../../interfaces/hooks/story';

interface UseUserStoriesProps {
	userId: string;
}

export const useUserStories = ({ userId }: UseUserStoriesProps): UseStoryListReturn => {
	const { data, isPending, isFetchingNextPage, error, hasNextPage, fetchNextPage } =
		useInfiniteQuery({
			queryKey: ['stories', 'user', userId],
			queryFn: ({ pageParam }) =>
				storyService.getStoriesByUserId(userId, pageParam as string | null),
			initialPageParam: null as string | null,
			getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
		});

	const stories = data?.pages.flatMap((page) => page.list) ?? [];

	const handleLoadMore = () => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	};

	return {
		stories,
		activeCategory: null,
		isPending,
		isFetchingNextPage,
		error: error as Error | null,
		pageTitle: 'Published Stories',
		hasNextPage: !!hasNextPage,
		handleCategoryClick: () => {},
		handleLoadMore,
	};
};
