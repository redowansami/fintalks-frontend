import React, { useState } from 'react';
import { MarkdownPreview } from './MarkdownPreview';
import { MarkdownToolbarButton } from './MarkdownToolbarButton';
import { MarkdownTabButton } from './MarkdownTabButton';
import { useMarkdownInsert } from '../hooks/useMarkdownInsert';
import '../styles/MarkdownEditor.css';

type TabType = 'write' | 'preview';

interface MarkdownEditorProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
	value,
	onChange,
	placeholder = 'Write your content here...',
}) => {
	const [activeTab, setActiveTab] = useState<TabType>('write');
	const { textareaRef, insertFormat } = useMarkdownInsert(onChange);

	return (
		<div className="markdown-editor-container">
			<div className="markdown-editor-tabs">
				<MarkdownTabButton
					label="Write"
					isActive={activeTab === 'write'}
					onClick={() => setActiveTab('write')}
				/>
				<MarkdownTabButton
					label="Preview"
					isActive={activeTab === 'preview'}
					onClick={() => setActiveTab('preview')}
				/>
			</div>

			{activeTab === 'write' && (
				<div className="markdown-editor-write">
					<div className="markdown-editor-toolbar">
						<MarkdownToolbarButton
							onClick={() => insertFormat('**', '**')}
							label="B"
							bold
						/>
						<MarkdownToolbarButton
							onClick={() => insertFormat('*', '*')}
							label="I"
							italic
						/>
						<MarkdownToolbarButton
							onClick={() => insertFormat('- ', '')}
							label="• List"
						/>
					</div>

					<textarea
						ref={textareaRef}
						id="markdown-editor"
						value={value}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							onChange(e.target.value)
						}
						placeholder={placeholder}
						rows={8}
						className="markdown-editor-textarea"
					/>

					<div className="markdown-editor-tip">
						Tip: Use standard Markdown. Double enter for new paragraphs.
					</div>
				</div>
			)}

			{activeTab === 'preview' && (
				<div className="markdown-editor-preview">
					<MarkdownPreview content={value} />
				</div>
			)}
		</div>
	);
};

export default MarkdownEditor;
