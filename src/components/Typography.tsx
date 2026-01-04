import React from 'react';
import '../styles/Typography.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'muted' | 'link';

interface TypographyProps {
	variant?: TypographyVariant;
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'muted';
	component?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	href?: string;
	onClick?: (e: React.MouseEvent) => void;
}

export const Typography = ({
	variant = 'body',
	color,
	component,
	children,
	className = '',
	...props
}: TypographyProps) => {
	const variantElementMap: Record<TypographyVariant, React.ElementType> = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		body: 'p',
		muted: 'p',
		link: 'a',
	};

	const Component = component || variantElementMap[variant];

	const classes = [
		'typography',
		`typography--${variant}`,
		color ? `typography-color--${color}` : '',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<Component className={classes} {...props}>
			{children}
		</Component>
	);
};
