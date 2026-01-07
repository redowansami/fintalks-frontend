import { Icon } from '@iconify/react';
import { Button } from './Button';
import { Typography } from './Typography';
import { ErrorDialog } from './ErrorComponents/ErrorDialog';
import '../styles/ImagePreview.css';

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
			{error && <ErrorDialog message={error} />}
			{preview ? (
				<div className="image-preview-container">
					<div className="image-preview-display">
						<img src={preview} alt="Preview" className="image-preview-img" />
					</div>
					<Button onClick={onChangeImage} disabled={isLoading} variant="secondary">
						<Icon icon="material-symbols:edit" />
						Change Image
					</Button>
				</div>
			) : (
				<div onClick={onSelectImage} className="image-preview-upload-zone">
					<Icon
						icon="material-symbols:cloud-upload"
						className="image-preview-upload-icon"
					/>
					<Typography variant="body" textAlign="center">
						Click to select an image
					</Typography>
					<Typography variant="muted" textAlign="center">
						PNG, JPG up to 5MB
					</Typography>
				</div>
			)}
		</>
	);
};
