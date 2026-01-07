import React from 'react';

interface MarkdownToolbarButtonProps {
	onClick: () => void;
	label: string;
	bold?: boolean;
	italic?: boolean;
}

export const MarkdownToolbarButton: React.FC<MarkdownToolbarButtonProps> = ({
	onClick,
	label,
	bold,
	italic,
}) => (
	<button
		type="button"
		onClick={onClick}
		className={`
      px-3 py-1.5 text-sm border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-600 transition-colors
      ${bold ? 'font-bold' : ''} 
      ${italic ? 'italic' : ''}
    `}
	>
		{label}
	</button>
);
