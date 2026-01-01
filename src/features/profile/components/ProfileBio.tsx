import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/ProfileBio.css';

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
					<p>{profile.bio}</p>
				</div>
			)}

			<div className="profile-contact">
				<span className="contact-item">
					<Icon icon="material-symbols:email" />
					{profile.email}
				</span>
				<span className="contact-item">
					<Icon icon="material-symbols:calendar-today" />
					Joined{' '}
					{new Date(profile.joinDate).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
					} as const)}
				</span>
			</div>
		</>
	);
};
