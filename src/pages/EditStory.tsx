import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditStory, useStoryForm, useStoryDetail } from '../hooks/story';
import { Spinner } from '../components/Spinner';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import { StoryFormContainer } from '../containers/story';

export const EditStory: React.FC = () => {
	const { storyId } = useParams<{ storyId: string }>();
	const navigate = useNavigate();
	const { story, isLoading: isLoadingStory, error: loadError } = useStoryDetail(storyId);
	const { editStory, isLoading, error, isSuccess, validationErrors } = useEditStory();
	const { formData, formHandlers, resetForm, isFormDirty } = useStoryForm(story || undefined);

	const handleEdit = (e: React.FormEvent) => {
		e.preventDefault();
		if (storyId) {
			editStory(storyId, {
				title: formData.title,
				body: formData.body,
				imageFile: formData.imageFile,
				categoryIds: formData.categoryIds,
			});
		}
	};

	const handleSuccessClose = () => {
		navigate(`/stories/${storyId}`);
	};

	if (isLoadingStory) {
		return (
			<div className="create-story-container">
				<Spinner />
			</div>
		);
	}

	if (loadError) {
		return (
			<div className="create-story-container">
				<ErrorDialog message="Failed to load story" />
			</div>
		);
	}

	return (
		<StoryFormContainer
			title="Edit Story"
			subtitle="Update your story details below."
			formData={formData}
			formHandlers={formHandlers}
			onSubmit={handleEdit}
			isLoading={isLoading}
			error={error}
			validationErrors={validationErrors}
			isSuccess={isSuccess}
			onSuccessClose={handleSuccessClose}
			submitButtonText="Update Story"
			submitButtonLoadingText="Updating..."
			successTitle="Story Updated"
			successMessage="Your story has been successfully updated!"
			isFormDirty={isFormDirty}
			showResetButton={true}
			onReset={resetForm}
			existingImageUrl={story?.imageUrl}
		/>
	);
};
