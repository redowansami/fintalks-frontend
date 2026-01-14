import type { ReactNode } from 'react';
import type { ViewableProps } from './ViewableProps';

export interface ModalProps extends ViewableProps {
	title?: string;
	message?: string;
	actionButtonText?: string;
	onActionClick?: () => void;
	children?: ReactNode;
}
