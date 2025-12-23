import { useState, useEffect, useTransition } from 'react';
import { storyService } from '../services/storyService';
import type { Story } from '../services/storyService';

interface UseStoryListReturn {
	stories: Story[];
	activeCategory: string | null;
	isPending: boolean;
	pageTitle: string;
	handleCategoryClick: (categoryName: string | null) => void;
}

export const useStoryList = (): UseStoryListReturn => {
	const [stories, setStories] = useState<Story[]>([]);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
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
