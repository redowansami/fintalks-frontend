import { useState } from 'react';
import type { useCreateStoryFormResult } from '../../interfaces/hooks/story';

export const useCreateStoryForm = (): useCreateStoryFormResult => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [categoryIds, setCategoryIds] = useState<string[]>([]);

	const resetForm = () => {
		setTitle('');
		setBody('');
		setImageFile(null);
		setCategoryIds([]);
	};

	const handleClose = (onClose: () => void) => {
		resetForm();
		onClose();
	};

	return {
		formData: {
			title,
			body,
			imageFile,
			categoryIds,
		},
		formHandlers: {
			setTitle,
			setBody,
			setImageFile,
			setCategoryIds,
		},
		handleClose,
		resetForm,
	};
};
