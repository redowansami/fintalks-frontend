import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { storyService, type Story } from '../services';

interface UseStoryListReturn {
	stories: Story[];
	activeCategory: string | null;
	isPending: boolean;
	isFetchingNextPage: boolean;
	error: Error | null;
	pageTitle: string;
	hasNextPage: boolean | undefined;
	handleCategoryClick: (categoryName: string | null) => void;
	handleLoadMore: () => void;
}

export const useStoryList = (): UseStoryListReturn => {
	const location = useLocation();
	const [activeCategory, setActiveCategory] = useState<string | null>(() => {
		const state = location.state as { selectedCategory?: string | null } | null;
		return state?.selectedCategory ?? null;
	});

	const { data, isPending, isFetchingNextPage, error, hasNextPage, fetchNextPage } =
		useInfiniteQuery({
			queryKey: ['stories', activeCategory],
			queryFn: ({ pageParam }) =>
				storyService.fetchStories(activeCategory, pageParam as string | null),
			getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
			initialPageParam: null as string | null,
		});

	const stories = data?.pages.flatMap((page) => (page as { list: Story[] }).list) ?? [];

	const handleCategoryClick = (categoryName: string | null) => {
		setActiveCategory(categoryName);
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
		error: error || null,
		pageTitle,
		hasNextPage,
		handleCategoryClick,
		handleLoadMore,
	};
};
