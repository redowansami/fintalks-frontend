import { useState, useEffect } from 'react';
import { storyService, type StoryDetail } from '../services';

interface UseStoryDetailReturn {
	story: StoryDetail | null;
	loading: boolean;
	error: string | null;
}

export const useStoryDetail = (storyId?: string): UseStoryDetailReturn => {
	const [story, setStory] = useState<StoryDetail | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!storyId) {
			setLoading(false);
			return;
		}

		const fetchStory = async () => {
			try {
				setLoading(true);
				const data = await storyService.fetchStoryDetail(storyId);
				setStory(data.story);
				setError(null);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'Failed to fetch story';
				setError(errorMessage);
				setStory(null);
			} finally {
				setLoading(false);
			}
		};

		fetchStory();
	}, [storyId]);

	return { story, loading, error };
};
