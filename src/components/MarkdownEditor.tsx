import React, { useState } from 'react';
import { MarkdownPreview } from './MarkdownPreview';
import { useMarkdownInsert } from '../hooks/useMarkdownInsert';
import '../styles/MarkdownEditor.css';
import { Button } from './Buttons/Button';
import { TabButton } from './Buttons/TabButton';

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
				<TabButton
					variant="folder"
					isActive={activeTab === 'write'}
					onClick={() => setActiveTab('write')}
				>
					Write
				</TabButton>
				<TabButton
					variant="folder"
					isActive={activeTab === 'preview'}
					onClick={() => setActiveTab('preview')}
				>
					Preview
				</TabButton>
			</div>

			{activeTab === 'write' && (
				<div className="markdown-editor-write">
					<div className="markdown-editor-toolbar">
						<Button onClick={() => insertFormat('**', '**')} variant="toolbar" isBold>
							B
						</Button>

						<Button onClick={() => insertFormat('*', '*')} variant="toolbar" isItalic>
							I
						</Button>

						<Button onClick={() => insertFormat('- ', '')} variant="toolbar">
							• List
						</Button>
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
