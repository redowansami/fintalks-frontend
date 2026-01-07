import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateStory, useCreateStoryModal } from '../features/story/hooks';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import { Button } from '../components/Button';
import '../styles/CreateStory.css';
import {
	StoryTitleField,
	StoryBodyField,
	StoryImageField,
	StoryCategories,
} from '../features/story/components';
import { Typography } from '../components/Typography';

export const CreateStory: React.FC = () => {
	const navigate = useNavigate();
	const { createStory, isLoading, error, validationErrors } = useCreateStory();
	const { formData, formHandlers } = useCreateStoryModal();

	const handleCreate = async (e: React.FormEvent) => {
		e.preventDefault();
		await createStory(formData.title, formData.body, formData.imageFile, formData.categoryIds);

		if (!error) {
			navigate('/');
		}
	};

	return (
		<div className="create-story-container">
			<Typography variant="h1" textAlign="center" className="mb-2">
				Create New Story
			</Typography>
			<Typography variant="body" textAlign="center" className="mb-6">
				Share your thoughts with the world.
			</Typography>

			<form onSubmit={handleCreate}>
				{error && (
					<ErrorDialog message={error} validationErrors={validationErrors || undefined} />
				)}

				<section className="create-story-form-section">
					<StoryTitleField value={formData.title} onChange={formHandlers.setTitle} />

					<StoryBodyField value={formData.body} onChange={formHandlers.setBody} />

					<StoryImageField
						onImageSelect={formHandlers.setImageFile}
						isLoading={isLoading}
					/>

					<StoryCategories
						selectedIds={formData.categoryIds}
						onChange={formHandlers.setCategoryIds}
					/>
				</section>

				<div className="create-story-footer">
					<Button type="submit" variant="primary" disabled={isLoading}>
						{isLoading ? 'Publishing...' : 'Publish Story'}
					</Button>
				</div>
			</form>
		</div>
	);
};
