import { Icon } from '@iconify/react';
import { Button } from './Button';

interface UploadActionsProps {
	onCancel: () => void;
	onUpload: () => void;
	isLoading: boolean;
	isDisabled: boolean;
}

export const UploadActions: React.FC<UploadActionsProps> = ({
	onCancel,
	onUpload,
	isLoading,
	isDisabled,
}) => {
	return (
		<div className="modal-actions">
			<Button variant="secondary" onClick={onCancel} disabled={isLoading}>
				Cancel
			</Button>
			<Button variant="primary" onClick={onUpload} disabled={isDisabled || isLoading}>
				{isLoading ? (
					<>
						<Icon icon="eos-icons:loading" className="spinner-icon" />
						Uploading...
					</>
				) : (
					'Upload'
				)}
			</Button>
		</div>
	);
};
