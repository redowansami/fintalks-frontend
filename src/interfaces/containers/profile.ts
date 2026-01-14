import type { UpdateProfileInput } from '../common/profile';
import type { User } from '../common/auth';
import type { ViewableProps } from '../components/ViewableProps';

export interface ProfileActionsProps {
	onEditProfile: () => void;
	onChangePassword: () => void;
}

export interface EditProfileModalProps extends ViewableProps {
	initialData: UpdateProfileInput;
}

export interface ProfileBioProps {
	profile: User;
}

export interface ProfilePictureProps {
	profile: Pick<User, 'profilePictureUrl' | 'name'>;
	onEditPicture?: () => void;
	isEditable?: boolean;
}

export interface ProfileStoriesProps {
	userId: string;
}
