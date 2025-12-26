import { Icon } from '@iconify/react';

interface ImagePreviewProps {
	preview: string | null;
	onChangeImage: () => void;
	onSelectImage: () => void;
	isLoading: boolean;
	error: string | null;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
	preview,
	onChangeImage,
	onSelectImage,
	isLoading,
	error,
}) => {
	return (
		<>
			{error && <div className="error-message">{error}</div>}
			{preview ? (
				<div className="preview-container">
					<img src={preview} alt="Preview" className="preview-image" />
					<button
						className="change-image-btn"
						onClick={onChangeImage}
						disabled={isLoading}
					>
						<Icon icon="material-symbols:edit" />
						Change Image
					</button>
				</div>
			) : (
				<div className="upload-area" onClick={onSelectImage}>
					<Icon icon="material-symbols:cloud-upload" className="upload-icon" />
					<p>Click to select an image</p>
					<p className="upload-hint">PNG, JPG up to 5MB</p>
				</div>
			)}
		</>
	);
};
