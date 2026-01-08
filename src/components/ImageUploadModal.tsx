import { useState, useRef } from 'react';
import { useProfilePictureUpload } from '../features/profile';
import { Modal } from './Modal';
import { FileInput } from './FileInput';
import { ImagePreview } from './ImagePreview';
import { Button } from './Buttons/Button';

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

	return (
		<Modal isOpen={isOpen} onClose={handleClose} title="Upload Profile Picture">
			<div>
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
				<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
					<Button
						variant="primary"
						onClick={handleUpload}
						disabled={!selectedFile || isLoading}
					>
						{isLoading ? 'Uploading...' : 'Upload'}
					</Button>
				</div>
			</div>
		</Modal>
	);
};
