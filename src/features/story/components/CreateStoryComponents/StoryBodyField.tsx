import MarkdownEditor from '../../../../components/MarkdownEditor';
import { Typography } from '../../../../components/Typography';
import { ValidationTooltip } from '../../../../components/Buttons/ValidationTooltip';

interface StoryBodyFieldProps {
	value: string;
	onChange: (value: string) => void;
	validationCriteria?: string[];
}

export const StoryBodyField: React.FC<StoryBodyFieldProps> = ({
	value,
	onChange,
	validationCriteria = ['Body should be between 10 - 5000 characters'],
}) => (
	<div className="space-y-2">
		<div className="input-header">
			<label>Story Content</label>
			{validationCriteria && <ValidationTooltip criteria={validationCriteria} />}
		</div>
		<MarkdownEditor
			value={value}
			onChange={onChange}
			placeholder="Write your story content here... Markdown is supported."
		/>
		<Typography variant="muted">
			Use the toolbar for formatting or type Markdown directly.
		</Typography>
	</div>
);
