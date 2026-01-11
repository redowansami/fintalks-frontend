/**
 * Interfaces for Markdown components
 */

export interface MarkdownEditorProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export interface MarkdownPreviewProps {
	content: string;
	className?: string;
}
