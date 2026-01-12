import React from 'react';
import '../styles/components/Typography.css';
import type { TypographyVariant } from '../constants/typography';
import type { TypographyProps } from '../interfaces/components/typography';

export const Typography = ({
	variant = 'body',
	color,
	component,
	children,
	className = '',
	textAlign = 'left',
	...props
}: TypographyProps) => {
	const variantElementMap: Record<TypographyVariant, React.ElementType> = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		body: 'p',
		body1: 'p',
		muted: 'p',
		xs: 'p',
		link: 'a',
	};

	const Component = component || variantElementMap[variant];

	const classes = [
		'typography',
		`typography--${variant}`,
		color ? `typography-color--${color}` : '',
		textAlign ? `typography-align--${textAlign}` : '',
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
