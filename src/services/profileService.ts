import axios from 'axios';
import type { AuthUser } from '../utils/authUtils';

export interface ProfileResponse {
	success: boolean;
	message: string;
	profile: AuthUser & {
		bio: string | null;
		profilePictureUrl: string | null;
	};
}

interface UpdateProfileData {
	name: string;
	bio: string;
}

const API_URL = 'http://localhost:3000/api/v1/users/profile';

export const fetchProfile = async (token: string | null): Promise<ProfileResponse> => {
	if (!token) {
		throw new Error('No authentication token found');
	}

	try {
		const response = await axios.get<ProfileResponse>(API_URL, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(error.response?.data?.message || 'Failed to fetch profile');
		}
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};

export const updateProfile = async (
	token: string | null,
	data: UpdateProfileData,
): Promise<ProfileResponse> => {
	if (!token) {
		throw new Error('No authentication token found');
	}

	try {
		const response = await axios.patch<ProfileResponse>(API_URL, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(error.response?.data?.message || 'Failed to update profile');
		}
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};
