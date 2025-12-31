import { Icon } from '@iconify/react';

interface PasswordToggleButtonProps {
	showPassword: boolean;
	onChange: () => void;
}

export const PasswordToggleButton = ({ showPassword, onChange }: PasswordToggleButtonProps) => {
	return (
		<button type="button" className="password-toggle-btn" onClick={onChange}>
			<Icon icon={showPassword ? 'mdi:eye' : 'el:eye-close'} />
		</button>
	);
};
