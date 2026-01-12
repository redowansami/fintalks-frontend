import axios, { AxiosError } from 'axios';
import { ApiError } from '../../services/apiClient';

const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

export const imgbbClient = axios.create({
	baseURL: 'https://api.imgbb.com/1/upload',
	timeout: 15000,
});

imgbbClient.interceptors.response.use(
	(response) => {
		if (response.data && !response.data.success) {
			return Promise.reject(new ApiError('ImgBB reported failure', 500));
		}
		return response;
	},
	(error: AxiosError) => {
		if (!IMGBB_API_KEY) {
			return Promise.reject(new ApiError('IMGBB API key is not configured', 500));
		}

		const externalData = error.response?.data as { error?: { message: string } };
		const message = externalData?.error?.message || 'Failed to upload image';
		const status = error.response?.status || 500;

		return Promise.reject(new ApiError(message, status));
	},
);
