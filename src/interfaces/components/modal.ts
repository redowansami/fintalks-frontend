/**
 * Interfaces for Modal component
 */

import type { ReactNode } from 'react';

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	message?: string;
	actionButtonText?: string;
	onActionClick?: () => void;
	children?: ReactNode;
}
