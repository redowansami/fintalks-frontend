/**
 * Interfaces for file upload and image components
 */

export interface FileInputProps {
	onFileSelect: (file: File) => void;
	isLoading: boolean;
}

export interface ImagePreviewProps {
	preview: string | null;
	onChangeImage: () => void;
	onSelectImage: () => void;
	isLoading: boolean;
	error: string | null;
}
