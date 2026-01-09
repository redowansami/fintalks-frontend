import { useState } from 'react';

interface FormData {
	title: string;
	body: string;
	imageFile: File | null;
	categoryIds: string[];
}

interface FormHandlers {
	setTitle: (title: string) => void;
	setBody: (body: string) => void;
	setImageFile: (file: File | null) => void;
	setCategoryIds: (ids: string[]) => void;
}

interface useCreateStoryFormResult {
	formData: FormData;
	formHandlers: FormHandlers;
	handleClose: (onClose: () => void) => void;
	resetForm: () => void;
}

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
