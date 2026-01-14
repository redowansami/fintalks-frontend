import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateStory, useStoryForm } from '../hooks/story';
import { StoryFormContainer } from '../containers/story';

export const CreateStory: React.FC = () => {
	const navigate = useNavigate();
	const { createStory, isPending, error, isSuccess, validationErrors } = useCreateStory();
	const { formData, formHandlers, resetForm } = useStoryForm();

	const handleCreate = (e: React.FormEvent) => {
		e.preventDefault();
		createStory({
			title: formData.title,
			body: formData.body,
			imageFile: formData.imageFile,
			categoryIds: formData.categoryIds,
		});
	};

	const handleSuccessClose = () => {
		resetForm();
		navigate('/');
	};

	return (
		<StoryFormContainer
			title="Create New Story"
			subtitle="Share your thoughts with the world."
			formData={formData}
			formHandlers={formHandlers}
			onSubmit={handleCreate}
			isLoading={isPending}
			error={error}
			validationErrors={validationErrors}
			isSuccess={isSuccess}
			onSuccessClose={handleSuccessClose}
			submitButtonText="Publish Story"
			submitButtonLoadingText="Publishing..."
			successTitle="Story Published"
			successMessage="Your story has been successfully published!"
		/>
	);
};
