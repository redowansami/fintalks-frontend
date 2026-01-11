import { forwardRef } from 'react';
import type { FileInputProps } from '../interfaces/components/imageUpload';

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	({ onFileSelect, isLoading }, ref) => {
		const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0];
			if (!file) return;

			if (!file.type.startsWith('image/')) {
				alert('Please select a valid image file');
				return;
			}

			const maxSize = 5 * 1024 * 1024;
			if (file.size > maxSize) {
				alert('Image size must be less than 5MB');
				return;
			}

			onFileSelect(file);
		};

		return (
			<input
				ref={ref}
				type="file"
				accept="image/*"
				onChange={handleFileSelect}
				style={{ display: 'none' }}
				disabled={isLoading}
			/>
		);
	},
);
