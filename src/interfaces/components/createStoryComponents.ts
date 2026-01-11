export interface StoryBodyFieldProps {
	value: string;
	onChange: (value: string) => void;
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
	isLoading: boolean;
}
