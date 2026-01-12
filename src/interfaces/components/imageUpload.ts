export interface FileInputProps {
	onFileSelect: (file: File) => void;
	isPending: boolean;
}

export interface ImagePreviewProps {
	preview: string | null;
	onChangeImage: () => void;
	onSelectImage: () => void;
	isPending: boolean;
	error: string | null;
}
