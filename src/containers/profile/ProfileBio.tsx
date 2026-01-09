import React from 'react';
import { Icon } from '@iconify/react';
import '../../styles/profile/ProfileBio.css';
import { Typography } from '../../components/Typography';

interface Profile {
	email: string;
	bio: string | null;
	joinDate: string;
}

interface ProfileBioProps {
	profile: Profile;
}

export const ProfileBio: React.FC<ProfileBioProps> = ({ profile }) => {
	return (
		<>
			{profile.bio && (
				<div className="profile-bio">
					<Typography variant="muted">{profile.bio}</Typography>
				</div>
			)}

			<div className="profile-contact">
				<Icon icon="ic:outline-email" />
				<Typography variant="muted">{profile.email}</Typography>
				<Icon icon="material-symbols:calendar-today" />
				<Typography variant="muted">
					Joined{' '}
					{new Date(profile.joinDate).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
					} as const)}
				</Typography>
			</div>
		</>
	);
};
