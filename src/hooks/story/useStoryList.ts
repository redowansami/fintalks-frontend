import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { storyService } from '../../services/storyService';
import type { UseStoryListReturn } from '../../interfaces/hooks/story';

export const useStoryList = (): UseStoryListReturn => {
	const { category } = useParams<{ category: string }>();
	const navigate = useNavigate();

	const activeCategory = category || null;

	const { data, isPending, isFetchingNextPage, error, hasNextPage, fetchNextPage } =
		useInfiniteQuery({
			queryKey: ['stories', activeCategory],
			queryFn: ({ pageParam }) =>
				storyService.getStories(activeCategory, pageParam as string | null),
			initialPageParam: null as string | null,
			getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
		});

	const stories = data?.pages.flatMap((page) => page.list) ?? [];

	const handleCategoryClick = (categoryName: string | null) => {
		navigate(categoryName ? `/categories/${categoryName}` : '/');
	};

	const handleLoadMore = () => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	};

	const pageTitle = activeCategory
		? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
		: 'Latest Articles';

	return {
		stories,
		activeCategory,
		isPending,
		isFetchingNextPage,
		error: error as Error | null,
		pageTitle,
		hasNextPage: !!hasNextPage,
		handleCategoryClick,
		handleLoadMore,
	};
};
