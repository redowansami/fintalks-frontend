import { TextAreaField } from '../TextAreaField';

interface StoryBodyFieldProps {
	value: string;
	onChange: (value: string) => void;
}

export const StoryBodyField: React.FC<StoryBodyFieldProps> = ({ value, onChange }) => (
	<TextAreaField
		label="Body"
		id="story-body"
		name="body"
		placeholder="Write your story content here..."
		value={value}
		onChange={(e) => onChange(e.target.value)}
		rows={5}
		validationCriteria={['Body should be between 10 to 5000 characters']}
	/>
);
