import React from 'react';
import { IconButton } from './Buttons/IconButton';
import '../styles/components/Modal.css';
import { Typography } from './Typography';
import type { ModalProps } from '../interfaces/components/modal';

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
						className="absolute top-[-15px] right-[-15px]"
					/>
				</div>
				{message && (
					<Typography variant="body1" textAlign="center">
						{message}
					</Typography>
				)}
				{children}
			</div>
		</div>
	);
};
