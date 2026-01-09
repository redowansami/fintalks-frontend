import React from 'react';
import '../styles/components/List.css';

interface ListProps {
	children: React.ReactNode;
	variant?: 'ordered' | 'unordered';
	className?: string;
}

export const List = ({ children, variant = 'unordered', className = '' }: ListProps) => {
	const Component = variant === 'ordered' ? 'ol' : 'ul';
	return <Component className={`custom-list ${className}`}>{children}</Component>;
};

export const ListItem = ({
	children,
	className = '',
}: {
	children: React.ReactNode;
	className?: string;
}) => <li className={`custom-list-item ${className}`}>{children}</li>;
