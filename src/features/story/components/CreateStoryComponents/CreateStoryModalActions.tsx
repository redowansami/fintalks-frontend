import { Icon } from '@iconify/react';
import { Button } from '../../../../components/Button';

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
			<Button variant="secondary" onClick={onCancel} disabled={isLoading}>
				Cancel
			</Button>
			<Button variant="primary" onClick={onCreate} disabled={isLoading}>
				{isLoading ? (
					<>
						<Icon icon="eos-icons:loading" className="spinner-icon" />
						Creating...
					</>
				) : (
					'Create Story'
				)}
			</Button>
		</div>
	);
};
