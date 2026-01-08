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
	const { formData, handleChange, mutation } = useEditProfile(initialName, initialBio, onClose);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutation.mutate(formData);
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
				mutation={mutation}
			/>
		</Modal>
	);
};
