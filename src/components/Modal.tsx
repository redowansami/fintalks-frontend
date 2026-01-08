import React from 'react';
import type { ReactNode } from 'react';
import { IconButton } from './Buttons/IconButton';
import '../styles/Modal.css';
import { Typography } from './Typography';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	message?: string;
	actionButtonText?: string;
	onActionClick?: () => void;
	children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, children }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<div className="modal-header">
					{title && <Typography variant="h3">{title}</Typography>}
					<IconButton
						icon="material-symbols:close"
						label="Close modal"
						onClick={onClose}
						className="absolute top-0 right-0"
					/>
				</div>
				{message && <Typography variant="body1" textAlign='center'>{message}</Typography>}
				{children}
			</div>
		</div>
	);
};
