export interface EditProfileFormProps {
	formData: { name: string; bio: string };
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	isLoading?: boolean;
	error?: Error | null;
}

export interface ChangePasswordModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export interface ImageUploadModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export interface ProfileActionsProps {
	onEditProfile: () => void;
	onChangePassword: () => void;
}

export interface EditProfileModalProps {
	isOpen: boolean;
	onClose: () => void;
	initialName: string;
	initialBio: string | null;
}

export interface Profile {
	email: string;
	bio: string | null;
	joinDate: string;
	profilePictureUrl: string | null;
	name: string;
	username: string;
}

export interface ProfileBioProps {
	profile: Profile;
}

export interface ProfilePictureProps {
	profile: Profile;
	onEditPicture: () => void;
}

export interface ProfileStoriesProps {
	storyCount?: number;
}
