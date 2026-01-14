import type { BaseInputProps } from './BaseInputProps';

export interface StoryBodyFieldProps extends BaseInputProps {
	validationCriteria?: string[];
}

export interface StoryCategoryCheckboxProps {
	id: string;
	name: string;
	checked: boolean;
	onChange: (id: string) => void;
}

export interface StoryImageFieldProps {
	onImageSelect: (file: File) => void;
	isPending: boolean;
	existingImageUrl?: string;
}
