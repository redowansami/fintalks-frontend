import { useRef, useState } from 'react';
import { FileInput } from '../FileInput';
import { ImagePreview } from '../ImagePreview';
import type { StoryImageFieldProps } from '../../interfaces/components/createStoryComponents';

export const StoryImageField: React.FC<StoryImageFieldProps> = ({ onImageSelect, isPending }) => {
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
				isPending={isPending}
				error={null}
			/>
			<FileInput ref={fileInputRef} onFileSelect={handleFileSelect} isPending={isPending} />
		</div>
	);
};
