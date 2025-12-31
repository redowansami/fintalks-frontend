import { useState, useEffect, useTransition } from 'react';
import { useLocation } from 'react-router-dom';
import { storyService, type Story } from '../services';

interface UseStoryListReturn {
	stories: Story[];
	activeCategory: string | null;
	isPending: boolean;
	pageTitle: string;
	handleCategoryClick: (categoryName: string | null) => void;
}

export const useStoryList = (): UseStoryListReturn => {
	const location = useLocation();
	const [stories, setStories] = useState<Story[]>([]);
	const [activeCategory, setActiveCategory] = useState<string | null>(() => {
		const state = location.state as { selectedCategory?: string | null } | null;
		return state?.selectedCategory ?? null;
	});
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		startTransition(async () => {
			try {
				const data = await storyService.fetchStories(activeCategory);
				setStories(data.list || []);
			} catch (err) {
				console.error('Error fetching stories:', err);
				setStories([]);
			}
		});
	}, [activeCategory]);

	const handleCategoryClick = (categoryName: string | null) => {
		setActiveCategory(categoryName);
	};

	const pageTitle = activeCategory
		? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
		: 'Latest Articles';

	return {
		stories,
		activeCategory,
		isPending,
		pageTitle,
		handleCategoryClick,
	};
};
