import { Icon } from '@iconify/react';
import { Header } from '../components';
import { Footer } from '../components';
import { Spinner } from '../components/Spinner';
import { useProfile } from '../hooks/useProfile';
import '../styles/Profile.css';

export const Profile = () => {
	const { data, isLoading, isError, error } = useProfile();
	const profile = data?.profile;

	if (isLoading) {
		return (
			<>
				<Header />
				<div className="profile-loading">
					<Spinner />
				</div>
				<Footer />
			</>
		);
	}

	if (isError) {
		return (
			<>
				<Header />
				<div className="profile-error">
					<div className="error-container">
						<p className="error-message">
							{error instanceof Error ? error.message : 'Failed to load profile'}
						</p>
					</div>
				</div>
				<Footer />
			</>
		);
	}

	if (!profile) {
		return (
			<>
				<Header />
				<div className="profile-error">
					<div className="error-container">
						<p className="error-message">No profile data available</p>
					</div>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<main className="profile-main">
				<div className="profile-container">
					{/* Profile Header Section */}
					<section className="profile-header-section">
						<div className="profile-header-content">
							{/* Profile Picture */}
							<div className="profile-picture-wrapper">
								<div className="profile-picture">
									{profile.profilePictureUrl ? (
										<img
											src={profile.profilePictureUrl}
											alt={profile.name}
											className="profile-image"
										/>
									) : (
										<div className="profile-image-placeholder">
											<Icon icon="mdi:user" className="placeholder-icon" />
										</div>
									)}
								</div>
								<button className="profile-edit-btn" title="Update Profile Picture">
									<Icon icon="material-symbols:photo-camera" />
								</button>
							</div>

							{/* Profile Info */}
							<div className="profile-info">
								<div className="profile-header-top">
									<div className="profile-names">
										<h1 className="profile-full-name">{profile.name}</h1>
										<p className="profile-username">@{profile.username}</p>
									</div>
									<div className="profile-actions">
										<button className="btn-edit">
											<Icon icon="material-symbols:edit" />
											Edit Profile
										</button>
										<button className="btn-password">
											<Icon icon="material-symbols:lock-reset" />
											Password Change
										</button>
									</div>
								</div>

								{/* Bio Section */}
								{profile.bio && (
									<div className="profile-bio">
										<p>{profile.bio}</p>
									</div>
								)}

								{/* Contact Info */}
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
							</div>
						</div>
					</section>

					{/* Published Stories Section */}
					<section className="profile-stories-section">
						<div className="stories-header">
							<h2 className="stories-title">Published Stories</h2>
							<span className="stories-badge">0 Articles</span>
						</div>
						<div className="stories-list">
							<div className="no-stories">
								<p>No published stories yet</p>
							</div>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};
