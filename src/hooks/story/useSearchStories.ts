import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { storyService } from '../../services/storyService';
import { useDebounce } from '../useDebounce';

export const useSearchStories = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { data, isPending, isFetchingNextPage, error, hasNextPage, fetchNextPage } =
		useInfiniteQuery({
			queryKey: ['stories', 'search', debouncedSearch],

			queryFn: ({ pageParam }) =>
				storyService.getStories(null, pageParam as string, debouncedSearch),

			initialPageParam: null as string | null,
			getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
			staleTime: 1000 * 60 * 5,
		});

	const stories = data?.pages.flatMap((page) => page.list) ?? [];

	const handleLoadMore = () => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	};

	const pageTitle = debouncedSearch ? `Results for "${debouncedSearch}"` : 'Search Stories';

	return {
		searchTerm,
		setSearchTerm,
		stories,
		isPending,
		isFetchingNextPage,
		error: error as Error | null,
		pageTitle,
		hasNextPage: !!hasNextPage,
		handleLoadMore,
	};
};
