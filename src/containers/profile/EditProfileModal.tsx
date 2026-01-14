import { useEditProfile } from '../../hooks/profile';
import { EditProfileForm } from './EditProfileForm';
import { Modal } from '../../components';
import type { EditProfileModalProps } from '../../interfaces/containers/profile';

export const EditProfileModal = ({ isOpen, onClose, initialData }: EditProfileModalProps) => {
	const { formData, handleChange, saveProfile, isPending, error } = useEditProfile(
		initialData,
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
				onInputChange={handleChange}
				onSubmit={handleSubmit}
				isPending={isPending}
				error={error}
			/>
		</Modal>
	);
};
