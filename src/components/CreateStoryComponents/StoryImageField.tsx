import { useRef, useState } from 'react';
import { FileInput } from '../FileInput';
import { ImagePreview } from '../ImagePreview';

interface StoryImageFieldProps {
	onImageSelect: (file: File) => void;
	isLoading: boolean;
}

export const StoryImageField: React.FC<StoryImageFieldProps> = ({ onImageSelect, isLoading }) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [preview, setPreview] = useState<string | null>(null);

	const handleFileSelect = (file: File) => {
		const reader = new FileReader();
		reader.onloadend = () => setPreview(reader.result as string);
		reader.readAsDataURL(file);
		onImageSelect(file);
	};

	const handleChangeImage = () => {
		fileInputRef.current?.click();
	};

	return (
		<div>
			<ImagePreview
				preview={preview}
				onChangeImage={handleChangeImage}
				onSelectImage={handleChangeImage}
				isLoading={isLoading}
				error={null}
			/>
			<FileInput ref={fileInputRef} onFileSelect={handleFileSelect} isLoading={isLoading} />
		</div>
	);
};
