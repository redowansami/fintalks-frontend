import '../styles/components/List.css';
import type { ListProps, ListItemProps } from '../interfaces/components/list';

export const List = ({ children, variant = 'unordered', className = '' }: ListProps) => {
	const Component = variant === 'ordered' ? 'ol' : 'ul';
	return <Component className={`custom-list ${className}`}>{children}</Component>;
};

export const ListItem = ({ children, className = '' }: ListItemProps) => (
	<li className={`custom-list-item ${className}`}>{children}</li>
);
