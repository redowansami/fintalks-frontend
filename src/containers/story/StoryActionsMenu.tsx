import React, { useState } from 'react';
import '../../styles/containers/story/StoryActionsMenu.css';
import { Button } from '../../components/Buttons/Button';
import { IconButton } from '../../components/Buttons/IconButton';
import { useClickOutside } from '../../hooks/useClickOutside';

interface StoryActionsMenuProps {
	onEdit: () => void;
	onDelete: () => void;
}

export const StoryActionsMenu: React.FC<StoryActionsMenuProps> = ({ onEdit, onDelete }) => {
	const [isOpen, setIsOpen] = useState(false);

	const containerRef = useClickOutside(() => setIsOpen(false));

	const handleAction = (callback: () => void) => {
		callback();
		setIsOpen(false);
	};

	return (
		<div className="story-actions-menu-container" ref={containerRef}>
			<IconButton
				icon="bi:three-dots"
				label="Story actions"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<div className="story-actions-menu">
					<Button variant="item-default" onClick={() => handleAction(onEdit)}>
						Edit Story
					</Button>
					<Button variant="item-danger" onClick={() => handleAction(onDelete)}>
						Delete Story
					</Button>
				</div>
			)}
		</div>
	);
};
