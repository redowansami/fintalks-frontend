import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

interface MarkdownPreviewProps {
	content: string;
	className?: string;
}

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkBreaks]}
			components={{
				ul: ({ ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
				p: ({ ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
				strong: ({ ...props }) => <strong className="font-bold" {...props} />,
				em: ({ ...props }) => <em className="italic" {...props} />,
			}}
		>
			{content || '*Nothing to preview*'}
		</ReactMarkdown>
	);
};
