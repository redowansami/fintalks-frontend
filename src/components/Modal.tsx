import React from 'react';
import '../styles/Modal.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	message: string;
	actionButtonText?: string;
	onActionClick?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	title,
	message,
	actionButtonText = 'Close',
	onActionClick,
}) => {
	if (!isOpen) return null;

	const handleActionClick = () => {
		if (onActionClick) {
			onActionClick();
		}
		onClose();
	};

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				{title && <h2 className="modal-title">{title}</h2>}
				<p className="modal-message">{message}</p>
				<button className="modal-button" onClick={handleActionClick}>
					{actionButtonText}
				</button>
			</div>
		</div>
	);
};
