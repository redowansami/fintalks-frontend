import React, { useState } from 'react';
import { MarkdownPreview } from './MarkdownPreview';
import { useMarkdownInsert } from '../hooks/useMarkdownInsert';
import '../styles/components/MarkdownEditor.css';
import { Button } from './Buttons/Button';
import { TabButton } from './Buttons/TabButton';

const EDITOR_TABS = {
	WRITE: 'write',
	PREVIEW: 'preview',
} as const;

type TabType = (typeof EDITOR_TABS)[keyof typeof EDITOR_TABS];

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
	const [activeTab, setActiveTab] = useState<TabType>(EDITOR_TABS.WRITE);
	const { textareaRef, insertFormat } = useMarkdownInsert(onChange);

	return (
		<div className="markdown-editor-container">
			<div className="markdown-editor-tabs">
				<TabButton
					variant="folder"
					isActive={activeTab === EDITOR_TABS.WRITE}
					onClick={() => setActiveTab(EDITOR_TABS.WRITE)}
				>
					Write
				</TabButton>
				<TabButton
					variant="folder"
					isActive={activeTab === EDITOR_TABS.PREVIEW}
					onClick={() => setActiveTab(EDITOR_TABS.PREVIEW)}
				>
					Preview
				</TabButton>
			</div>

			{activeTab === EDITOR_TABS.WRITE && (
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

			{activeTab === EDITOR_TABS.PREVIEW && (
				<div className="markdown-editor-preview">
					<MarkdownPreview content={value} />
				</div>
			)}
		</div>
	);
};

export default MarkdownEditor;
