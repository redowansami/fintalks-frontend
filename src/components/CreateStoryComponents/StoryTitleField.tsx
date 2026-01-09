import { InputField } from '../InputField';

interface StoryTitleFieldProps {
	value: string;
	onChange: (value: string) => void;
}

export const StoryTitleField: React.FC<StoryTitleFieldProps> = ({ value, onChange }) => (
	<InputField
		label="Title"
		id="story-title"
		name="title"
		type="text"
		placeholder="Enter an engaging title"
		value={value}
		onChange={(e) => onChange(e.target.value)}
		validationCriteria={['Title should be between 3 to 100 characters']}
	/>
);
