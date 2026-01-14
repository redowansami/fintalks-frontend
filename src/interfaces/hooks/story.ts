import type { Story, StoryDetail, StoryInput } from '../common/story';
import type { AsyncState } from './common';

export interface UseCreateStoryResult extends AsyncState {
	createStory: (input: StoryInput) => void;
	validationErrors?: Record<string, string | string[]>;
}

export interface FormHandlers {
	setTitle: (title: string) => void;
	setBody: (body: string) => void;
	setImageFile: (file: File | null) => void;
	setCategoryIds: (ids: string[]) => void;
}

export interface useCreateStoryFormResult {
	formData: StoryInput;
	formHandlers: FormHandlers;
	handleClose: (onClose: () => void) => void;
	resetForm: () => void;
}

export interface UseStoryDetailReturn extends AsyncState {
	story: StoryDetail | null;
}

export interface UseStoryListReturn {
	stories: Story[];
	activeCategory: string | null;
	isPending: boolean;
	isFetchingNextPage: boolean;
	error: Error | null;
	pageTitle: string;
	hasNextPage: boolean;
	handleCategoryClick: (categoryName: string | null) => void;
	handleLoadMore: () => void;
}
