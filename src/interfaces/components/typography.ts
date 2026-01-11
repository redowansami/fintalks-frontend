/**
 * Interfaces for Typography component
 */

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body1' | 'body' | 'muted' | 'xs' | 'link';

export interface TypographyProps {
	variant?: TypographyVariant;
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'muted';
	component?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	textAlign?: 'left' | 'center' | 'right' | 'justify';
	href?: string;
	onClick?: (e: React.MouseEvent) => void;
}
