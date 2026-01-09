import React from 'react';
import '../../styles/profile/ProfileStories.css';

interface ProfileStoriesProps {
	storyCount?: number;
}

export const ProfileStories: React.FC<ProfileStoriesProps> = ({ storyCount = 0 }) => {
	return (
		<section className="profile-stories-section">
			<div className="stories-header">
				<h2 className="stories-title">Published Stories</h2>
				<span className="stories-badge">{storyCount} Articles</span>
			</div>
			<div className="stories-list">
				<div className="no-stories">
					<p>No published stories yet</p>
				</div>
			</div>
		</section>
	);
};
