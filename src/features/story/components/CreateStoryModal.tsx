import { useCreateStory } from '../hooks';
import { useCreateStoryModal } from '../hooks';
import { ErrorDialog } from '../../../components/ErrorComponents/ErrorDialog';
import { StoryTitleField } from './CreateStoryComponents/StoryTitleField';
import { StoryBodyField } from './CreateStoryComponents/StoryBodyField';
import { StoryImageField } from './CreateStoryComponents/StoryImageField';
import { StoryCategories } from './CreateStoryComponents/StoryCategories';
import { CreateStoryModalHeader } from './CreateStoryComponents/CreateStoryModalHeader';
import { CreateStoryModalActions } from './CreateStoryComponents/CreateStoryModalActions';
import '../../../styles/CreateStoryModal.css';

interface CreateStoryModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const CreateStoryModal: React.FC<CreateStoryModalProps> = ({ isOpen, onClose }) => {
	const { createStory, isLoading, error, validationErrors } = useCreateStory();
	const { formData, formHandlers, handleClose } = useCreateStoryModal();

	const handleCreate = async () => {
		await createStory(formData.title, formData.body, formData.imageFile, formData.categoryIds);
		if (!error) {
			handleClose(onClose);
		}
	};

	const onCancel = () => {
		handleClose(onClose);
	};

	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="create-story-modal">
				<CreateStoryModalHeader
					onClose={() => handleClose(onClose)}
					isLoading={isLoading}
				/>
				<div className="modal-content">
					{error && (
						<ErrorDialog
							message={error}
							validationErrors={validationErrors || undefined}
						/>
					)}
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
					<CreateStoryModalActions
						onCancel={onCancel}
						onCreate={handleCreate}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</div>
	);
};
