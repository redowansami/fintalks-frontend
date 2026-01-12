import type { UserProfile, UpdateProfileInput } from '../common/profile';
import type { ViewableProps } from '../components/ViewableProps';

export interface ProfileActionsProps {
	onEditProfile: () => void;
	onChangePassword: () => void;
}

export interface EditProfileModalProps extends ViewableProps {
	initialData: UpdateProfileInput;
}

export interface ProfileBioProps {
	profile: UserProfile;
}

export interface ProfilePictureProps {
	profile: Pick<UserProfile, 'profilePictureUrl' | 'name'>;
	onEditPicture: () => void;
}

export interface ProfileStoriesProps {
	storyCount?: number;
}
