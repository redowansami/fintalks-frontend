import { Icon } from '@iconify/react';

interface CreateStoryModalActionsProps {
	onCancel: () => void;
	onCreate: () => void;
	isLoading: boolean;
}

export const CreateStoryModalActions: React.FC<CreateStoryModalActionsProps> = ({
	onCancel,
	onCreate,
	isLoading,
}) => {
	return (
		<div className="modal-actions">
			<button className="btn-secondary" onClick={onCancel} disabled={isLoading}>
				Cancel
			</button>
			<button className="btn-primary" onClick={onCreate} disabled={isLoading}>
				{isLoading ? (
					<>
						<Icon icon="eos-icons:loading" className="spinner-icon" />
						Creating...
					</>
				) : (
					'Create Story'
				)}
			</button>
		</div>
	);
};
