import React from 'react';
import '../../styles/containers/profile/ProfileBio.css';
import { Typography } from '../../components/Typography';
import { IconItem } from '../../components/IconItem';
import type { ProfileBioProps } from '../../interfaces/containers/profile';

export const ProfileBio: React.FC<ProfileBioProps> = ({ profile }) => {
	return (
		<>
			{profile.bio && (
				<div className="profile-bio">
					<Typography variant="muted">{profile.bio}</Typography>
				</div>
			)}

			<div className="profile-contact">
				<IconItem icon="ic:outline-email">{profile.email}</IconItem>

				<IconItem icon="material-symbols:calendar-today">
					Joined{' '}
					{new Date(profile.joinDate).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
					} as const)}
				</IconItem>
			</div>
		</>
	);
};
