import { useEditProfile } from '../hooks';
import { EditProfileForm } from './EditProfileForm';
import { Modal } from '../../../components';

interface EditProfileModalProps {
	isOpen: boolean;
	onClose: () => void;
	initialName: string;
	initialBio: string | null;
}

export const EditProfileModal = ({
	isOpen,
	onClose,
	initialName,
	initialBio,
}: EditProfileModalProps) => {
	const { formData, handleChange, saveProfile, isLoading, error } = useEditProfile(
		{ name: initialName, bio: initialBio || '' },
		onClose,
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		saveProfile();
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Update Profile"
			actionButtonText="Close"
			onActionClick={onClose}
		>
			<EditProfileForm
				formData={formData}
				handleChange={handleChange}
				onSubmit={handleSubmit}
				isLoading={isLoading}
				error={error}
			/>
		</Modal>
	);
};
