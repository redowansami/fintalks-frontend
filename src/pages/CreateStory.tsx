import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateStory, useCreateStoryForm } from '../hooks/story';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import { Button } from '../components/Buttons/Button';
import { Modal } from '../components/Modal';
import { InputField } from '../components/InputField';
import '../styles/CreateStory.css';
import { StoryBodyField, StoryImageField, StoryCategories } from '../container/story';
import { Typography } from '../components/Typography';

export const CreateStory: React.FC = () => {
	const navigate = useNavigate();
	const { createStory, isLoading, error, isSuccess, validationErrors } = useCreateStory();
	const { formData, formHandlers, resetForm } = useCreateStoryForm();
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const handleCreate = (e: React.FormEvent) => {
		e.preventDefault();
		createStory({
			title: formData.title,
			body: formData.body,
			imageFile: formData.imageFile,
			categoryIds: formData.categoryIds,
		});
	};

	const handleSuccessModalClose = () => {
		setShowSuccessModal(false);
		resetForm();
		navigate('/');
	};

	if (isSuccess && !showSuccessModal) {
		setShowSuccessModal(true);
	}

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
					<InputField
						label="Title"
						id="story-title"
						name="title"
						type="text"
						placeholder="Enter an engaging title"
						value={formData.title}
						onChange={(e) => formHandlers.setTitle(e.target.value)}
						validationCriteria={['Title should be between 3 to 100 characters']}
					/>

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

			<Modal
				isOpen={showSuccessModal}
				onClose={handleSuccessModalClose}
				title="Story Published"
				message="Your story has been successfully published!"
			>
				<div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
					<Button variant="primary" onClick={handleSuccessModalClose}>
						Go to Home
					</Button>
				</div>
			</Modal>
		</div>
	);
};
