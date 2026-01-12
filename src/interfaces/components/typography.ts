import type { TypographyVariant, TypographyColor, TextAlign } from '../../constants/typography';

export interface TypographyProps {
	variant?: TypographyVariant;
	color?: TypographyColor;
	component?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	textAlign?: TextAlign;
	href?: string;
	onClick?: (e: React.MouseEvent) => void;
}
