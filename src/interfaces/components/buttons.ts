export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'danger'
	| 'item-default'
	| 'item-danger'
	| 'toolbar';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	isLoading?: boolean;
	loadingText?: string;
	isBold?: boolean;
	isItalic?: boolean;
}

export type IconButtonVariant = 'ghost' | 'primary' | 'danger';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string;
	label: string;
	variant?: IconButtonVariant;
	size?: IconButtonSize;
	tooltip?: string;
}

export type TabVariant = 'pill' | 'folder';

export interface TabButtonProps {
	children: React.ReactNode;
	isActive: boolean;
	onClick: () => void;
	variant?: TabVariant;
	className?: string;
}
