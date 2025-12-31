import { CloseButton } from '../../../../components/CloseButton';

interface CreateStoryModalHeaderProps {
	onClose: () => void;
	isLoading: boolean;
}

export const CreateStoryModalHeader: React.FC<CreateStoryModalHeaderProps> = ({
	onClose,
	isLoading,
}) => {
	return (
		<div className="modal-header">
			<h2>Create New Story</h2>
			<CloseButton onClick={onClose} disabled={isLoading} />
		</div>
	);
};
