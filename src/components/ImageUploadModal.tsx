import { useState, useRef } from 'react';
import { useProfilePictureUpload } from '../features/profile';
import { FileInput } from './FileInput';
import { ImagePreview } from './ImagePreview';
import { UploadActions } from './UploadActions';
import '../styles/ImageUploadModal.css';
import { CloseButton } from './Buttons/CloseButton';

interface ImageUploadModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ isOpen, onClose }) => {
	const { uploadProfilePicture, isLoading, error } = useProfilePictureUpload();
	const [preview, setPreview] = useState<string | null>(null);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileSelect = (file: File) => {
		setSelectedFile(file);
		const reader = new FileReader();
		reader.onloadend = () => setPreview(reader.result as string);
		reader.readAsDataURL(file);
	};

	const handleClose = () => {
		setPreview(null);
		setSelectedFile(null);
		if (fileInputRef.current) fileInputRef.current.value = '';
		onClose();
	};

	const handleUpload = async () => {
		if (selectedFile) {
			await uploadProfilePicture(selectedFile);
			if (!error) handleClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="image-upload-modal">
				<div className="modal-header">
					<h2>Upload Profile Picture</h2>
					<CloseButton onClick={handleClose} disabled={isLoading} />
				</div>

				<div className="modal-content">
					<ImagePreview
						preview={preview}
						onChangeImage={() => fileInputRef.current?.click()}
						onSelectImage={() => fileInputRef.current?.click()}
						isLoading={isLoading}
						error={error}
					/>
					<FileInput
						ref={fileInputRef}
						onFileSelect={handleFileSelect}
						isLoading={isLoading}
					/>
					<UploadActions
						onCancel={handleClose}
						onUpload={handleUpload}
						isLoading={isLoading}
						isDisabled={!selectedFile}
					/>
				</div>
			</div>
		</div>
	);
};
