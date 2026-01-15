import type { Category } from '../common/category';
import type { User } from '../common/auth';

export interface AsyncState {
	isPending: boolean;
	isError?: boolean;
	isSuccess?: boolean;
	error: Error | null;
}

export interface UseMarkdownInsertReturn {
	textareaRef: React.RefObject<HTMLTextAreaElement | null>;
	insertFormat: (prefix: string, suffix: string) => void;
}

export interface CategoryContextType {
	categories: Category[];
	loading: boolean;
	error: Error | null;
}

export interface UseTopAuthorsReturn {
	authors: User[];
	loading: boolean;
	error: Error | null;
}
