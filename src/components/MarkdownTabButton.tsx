import React from 'react';

interface MarkdownTabButtonProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
}

export const MarkdownTabButton: React.FC<MarkdownTabButtonProps> = ({
	label,
	isActive,
	onClick,
}) => (
	<button
		type="button"
		onClick={onClick}
		className={`flex-1 py-3 text-sm font-medium transition-colors duration-200 
            ${
				isActive
					? 'bg-white text-blue-600 border-t-2 border-t-blue-600'
					: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
			}`}
	>
		{label}
	</button>
);
