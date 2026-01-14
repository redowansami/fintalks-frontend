import { useState, useRef } from 'react';
import { useProfilePictureUpload } from '../../hooks/profile/useProfilePictureUpload';
import { Modal } from '../../components/Modal';
import { FileInput } from '../../components/FileInput';
import { ImagePreview } from '../../components/ImagePreview';
import { Button } from '../../components/Buttons/Button';
import '../../styles/containers/profile/ImageUploadModal.css';
import type { ViewableProps } from '../../interfaces/components/ViewableProps';

export const ImageUploadModal: React.FC<ViewableProps> = ({ isOpen, onClose }) => {
	const { uploadProfilePicture, isPending, error } = useProfilePictureUpload();
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
					isPending={isPending}
					error={error?.message || null}
				/>
				<FileInput
					ref={fileInputRef}
					onFileSelect={handleFileSelect}
					isPending={isPending}
				/>
				<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
					<Button
						variant="primary"
						onClick={handleUpload}
						disabled={!selectedFile || isPending}
					>
						{isPending ? 'Uploading...' : 'Upload'}
					</Button>
				</div>
			</div>
		</Modal>
	);
};
