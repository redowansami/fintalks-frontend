/**
 * Interfaces for List component
 */

export interface ListProps {
	children: React.ReactNode;
	variant?: 'ordered' | 'unordered';
	className?: string;
}

export interface ListItemProps {
	children: React.ReactNode;
	className?: string;
}
