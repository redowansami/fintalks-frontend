import { Icon } from '@iconify/react';

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
			<button className="btn-secondary" onClick={onCancel} disabled={isLoading}>
				Cancel
			</button>
			<button className="btn-primary" onClick={onUpload} disabled={isDisabled || isLoading}>
				{isLoading ? (
					<>
						<Icon icon="eos-icons:loading" className="spinner-icon" />
						Uploading...
					</>
				) : (
					'Upload'
				)}
			</button>
		</div>
	);
};
