/**
 * Profile Feature - Public API
 *
 * All user profile-related functionality is encapsulated here.
 */

// Components
export { ProfileLayout } from './components';

// Hooks
export { useProfile, useEditProfile, useProfilePictureUpload } from './hooks';

// Services
export { profileService, imageUploadService } from './services';

// Types
export type { ProfileData, ProfileUpdatePayload } from './types';
