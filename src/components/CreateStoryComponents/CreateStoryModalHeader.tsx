import { Icon } from '@iconify/react';

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
			<button className="modal-close-btn" onClick={onClose} disabled={isLoading}>
				<Icon icon="material-symbols:close" />
			</button>
		</div>
	);
};
