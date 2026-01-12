import type { BaseInputProps } from './BaseInputProps';

export interface MarkdownEditorProps extends BaseInputProps {
	placeholder?: string;
}

export interface MarkdownPreviewProps {
	content: string;
	className?: string;
}
