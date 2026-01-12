import type {
	ButtonVariant,
	IconButtonVariant,
	IconButtonSize,
	TabVariant,
} from '../../constants/button';

interface BaseButtonProps<T = string> extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: T;
	className?: string;
}

export interface ButtonProps extends BaseButtonProps<ButtonVariant> {
	isPending?: boolean;
	loadingText?: string;
	isBold?: boolean;
	isItalic?: boolean;
}

export interface IconButtonProps extends BaseButtonProps<IconButtonVariant> {
	icon: string;
	label: string;
	size?: IconButtonSize;
	tooltip?: string;
}

export interface TabButtonProps extends BaseButtonProps<TabVariant> {
	isActive: boolean;
}
