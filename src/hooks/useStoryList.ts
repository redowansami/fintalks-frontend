import { useState, useEffect, useTransition } from 'react';
import { storyService } from '../services/storyService';
import type { BlogStory } from '../services/storyService';

interface UseStoryListReturn {
	blogs: BlogStory[];
	activeCategory: string | null;
	isPending: boolean;
	pageTitle: string;
	handleCategoryClick: (categoryName: string | null) => void;
}

export const useStoryList = (): UseStoryListReturn => {
	const [blogs, setBlogs] = useState<BlogStory[]>([]);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		startTransition(async () => {
			try {
				const data = await storyService.fetchStories(activeCategory);
				setBlogs(data.list || []);
			} catch (err) {
				console.error('Error fetching blogs:', err);
				setBlogs([]);
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
		blogs,
		activeCategory,
		isPending,
		pageTitle,
		handleCategoryClick,
	};
};
