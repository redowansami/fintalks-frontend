import React, { useState } from 'react';
import { ErrorDialog } from '../../components/ErrorComponents/ErrorDialog';
import { Button } from '../../components/Buttons/Button';
import { Modal } from '../../components/Modal';
import { InputField } from '../../components/InputField';
import { StoryBodyField, StoryImageField } from '../../components/CreateStoryComponents';
import { StoryCategories } from '../../containers/story/StoryCategories';
import { Typography } from '../../components/Typography';
import type { StoryFormData } from '../../hooks/story';
import '../../styles/pages/CreateStory.css';

interface StoryFormContainerProps {
	title: string;
	subtitle: string;
	formData: StoryFormData;
	formHandlers: {
		setTitle: (title: string) => void;
		setBody: (body: string) => void;
		setImageFile: (file: File | null) => void;
		setCategoryIds: (ids: string[]) => void;
	};
	onSubmit: (e: React.FormEvent) => void;
	isPending: boolean;
	error: string | null;
	validationErrors?: Record<string, string | string[]>;
	isSuccess: boolean | undefined;
	onSuccessClose: () => void;
	submitButtonText: string;
	submitButtonLoadingText: string;
	successTitle: string;
	successMessage: string;
	isFormDirty?: boolean;
	showResetButton?: boolean;
	onReset?: () => void;
	existingImageUrl?: string;
}

export const StoryFormContainer: React.FC<StoryFormContainerProps> = ({
	title,
	subtitle,
	formData,
	formHandlers,
	onSubmit,
	isPending,
	error,
	validationErrors,
	isSuccess,
	onSuccessClose,
	submitButtonText,
	submitButtonLoadingText,
	successTitle,
	successMessage,
	isFormDirty = true,
	showResetButton = false,
	onReset,
	existingImageUrl,
}) => {
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	if (isSuccess && !showSuccessModal) {
		setShowSuccessModal(true);
	}

	const handleSuccessModalClose = () => {
		setShowSuccessModal(false);
		onSuccessClose();
	};

	return (
		<div className="create-story-container">
			<Typography variant="h1" textAlign="center" className="mb-2">
				{title}
			</Typography>
			<Typography variant="body" textAlign="center" className="mb-6">
				{subtitle}
			</Typography>

			<form onSubmit={onSubmit}>
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
						isPending={isPending}
						existingImageUrl={existingImageUrl}
					/>

					<StoryCategories
						selectedIds={formData.categoryIds}
						onChange={formHandlers.setCategoryIds}
					/>
				</section>

				<div className="create-story-footer">
					<Button type="submit" variant="primary" disabled={isPending || !isFormDirty}>
						{isPending ? submitButtonLoadingText : submitButtonText}
					</Button>
					{showResetButton && (
						<Button
							type="button"
							variant="secondary"
							onClick={onReset}
							disabled={!isFormDirty}
							style={{ marginLeft: '1rem' }}
						>
							Reset
						</Button>
					)}
				</div>
			</form>

			<Modal
				isOpen={showSuccessModal}
				onClose={handleSuccessModalClose}
				title={successTitle}
				message={successMessage}
			>
				<div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
					<Button variant="primary" onClick={handleSuccessModalClose}>
						{title === 'Create New Story' ? 'Go to Home' : 'View Story'}
					</Button>
				</div>
			</Modal>
		</div>
	);
};
