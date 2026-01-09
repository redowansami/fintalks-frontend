import { useState, useEffect, useCallback, useRef } from 'react';
import type { StoryDetail } from '../../types/story';

export interface StoryFormData {
	title: string;
	body: string;
	imageFile: File | null;
	categoryIds: string[];
}

export const INITIAL_STORY_STATE: StoryFormData = {
	title: '',
	body: '',
	imageFile: null,
	categoryIds: [],
};

interface FormHandlers {
	setTitle: (title: string) => void;
	setBody: (body: string) => void;
	setImageFile: (file: File | null) => void;
	setCategoryIds: (ids: string[]) => void;
}

interface UseStoryFormResult {
	formData: StoryFormData;
	formHandlers: FormHandlers;
	handleClose: (onClose: () => void) => void;
	resetForm: () => void;
	isFormDirty: boolean;
}

export const useStoryForm = (story?: StoryDetail): UseStoryFormResult => {
	const [state, setState] = useState<{ current: StoryFormData; initial: StoryFormData }>({
		current: INITIAL_STORY_STATE,
		initial: INITIAL_STORY_STATE,
	});

	const storyIdRef = useRef<string | undefined>(undefined);

	useEffect(() => {
		if (story && storyIdRef.current !== story.storyId) {
			storyIdRef.current = story.storyId;
			const newData: StoryFormData = {
				title: story.title,
				body: story.body,
				imageFile: null,
				categoryIds: story.categories.map((cat) => cat.categoryId),
			};
			Promise.resolve().then(() => {
				setState({ current: newData, initial: newData });
			});
		}
	}, [story]);

	const isFormDirty = story
		? state.current.title !== state.initial.title ||
		  state.current.body !== state.initial.body ||
		  state.current.imageFile !== state.initial.imageFile ||
		  JSON.stringify(state.current.categoryIds) !== JSON.stringify(state.initial.categoryIds)
		: false;

	const resetForm = useCallback(() => {
		setState((prev) => ({ ...prev, current: prev.initial }));
	}, []);

	const handleClose = useCallback(
		(onClose: () => void) => {
			resetForm();
			onClose();
		},
		[resetForm],
	);

	const formHandlers: FormHandlers = {
		setTitle: (title: string) =>
			setState((prev) => ({ ...prev, current: { ...prev.current, title } })),
		setBody: (body: string) =>
			setState((prev) => ({ ...prev, current: { ...prev.current, body } })),
		setImageFile: (imageFile: File | null) =>
			setState((prev) => ({ ...prev, current: { ...prev.current, imageFile } })),
		setCategoryIds: (categoryIds: string[]) =>
			setState((prev) => ({ ...prev, current: { ...prev.current, categoryIds } })),
	};

	return {
		formData: state.current,
		formHandlers,
		handleClose,
		resetForm,
		isFormDirty,
	};
};
