import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { storyService, type Story } from '../services';

interface UseStoryListReturn {
	stories: Story[];
	activeCategory: string | null;
	isPending: boolean;
	error: Error | null;
	pageTitle: string;
	handleCategoryClick: (categoryName: string | null) => void;
}

export const useStoryList = (): UseStoryListReturn => {
	const location = useLocation();
	const [activeCategory, setActiveCategory] = useState<string | null>(() => {
		const state = location.state as { selectedCategory?: string | null } | null;
		return state?.selectedCategory ?? null;
	});

	const { data, isPending, error } = useQuery({
		queryKey: ['stories', activeCategory],
		queryFn: () => storyService.fetchStories(activeCategory),
	});

	const handleCategoryClick = (categoryName: string | null) => {
		setActiveCategory(categoryName);
	};

	const pageTitle = activeCategory
		? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
		: 'Latest Articles';

	return {
		stories: data?.list || [],
		activeCategory,
		isPending,
		error: error || null,
		pageTitle,
		handleCategoryClick,
	};
};
