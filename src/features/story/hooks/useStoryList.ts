import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { storyService, type Story } from '../../../services/storyService';

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
	const { category } = useParams<{ category: string }>();
	const navigate = useNavigate();

	const activeCategory = category || null;

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
		if (categoryName) {
			navigate(`/categories/${categoryName}`);
		} else {
			navigate('/');
		}
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
