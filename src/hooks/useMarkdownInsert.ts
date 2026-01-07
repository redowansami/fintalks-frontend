import { useRef, type RefObject } from 'react';

interface UseMarkdownInsertReturn {
	textareaRef: RefObject<HTMLTextAreaElement | null>;
	insertFormat: (prefix: string, suffix: string) => void;
}

export const useMarkdownInsert = (onChange: (value: string) => void): UseMarkdownInsertReturn => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const insertFormat = (prefix: string, suffix: string) => {
		const textarea = textareaRef.current;
		if (!textarea) return;

		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const text = textarea.value;

		const before = text.substring(0, start);
		const selection = text.substring(start, end);
		const after = text.substring(end);

		const newText = `${before}${prefix}${selection}${suffix}${after}`;
		onChange(newText);

		setTimeout(() => {
			textarea.focus();
			textarea.setSelectionRange(start + prefix.length, end + prefix.length);
		}, 0);
	};

	return { textareaRef, insertFormat };
};
