import { useEditProfile } from '../hooks';
import { EditProfileForm } from './EditProfileForm';
import '../styles/EditProfileModal.css';

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

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutation.mutate(formData);
	};

	return (
		<div className="edit-profile-overlay">
			<div className="edit-profile-modal">
				<h2 className="edit-profile-title">Update Profile</h2>
				<EditProfileForm
					formData={formData}
					handleChange={handleChange}
					onSubmit={handleSubmit}
					onCancel={onClose}
					mutation={mutation}
				/>
			</div>
		</div>
	);
};
