// import axios from 'axios';

// const IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

// export interface ImgbbResponse {
// 	data: {
// 		id: string;
// 		title: string;
// 		url_viewer: string;
// 		url: string;
// 		display_url: string;
// 		width: string;
// 		height: string;
// 		size: string;
// 		time: string;
// 		expiration: string;
// 		image: {
// 			filename: string;
// 			name: string;
// 			mime: string;
// 			extension: string;
// 			url: string;
// 		};
// 		thumb: {
// 			filename: string;
// 			name: string;
// 			mime: string;
// 			extension: string;
// 			url: string;
// 		};
// 		medium: {
// 			filename: string;
// 			name: string;
// 			mime: string;
// 			extension: string;
// 			url: string;
// 		};
// 		delete_url: string;
// 	};
// 	success: boolean;
// 	status: number;
// }

// export class ImageUploadError extends Error {
// 	constructor(message: string) {
// 		super(message);
// 		this.name = 'ImageUploadError';
// 	}
// }

// export const uploadImageToImgbb = async (file: File): Promise<string> => {
// 	const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

// 	if (!apiKey) {
// 		throw new ImageUploadError('IMGBB API key is not configured');
// 	}

// 	try {
// 		const formData = new FormData();
// 		formData.append('image', file);
// 		formData.append('key', apiKey);

// 		const response = await axios.post<ImgbbResponse>(IMGBB_API_URL, formData, {
// 			headers: {
// 				'Content-Type': 'multipart/form-data',
// 			},
// 			timeout: 15000,
// 		});

// 		if (!response.data.success) {
// 			throw new ImageUploadError('Failed to upload image to imgbb');
// 		}

// 		return response.data.data.url;
// 	} catch (error) {
// 		if (axios.isAxiosError(error)) {
// 			const message = error.response?.data?.error?.message || 'Failed to upload image';
// 			throw new ImageUploadError(message);
// 		}
// 		throw error instanceof Error ? error : new ImageUploadError('An unexpected error occurred');
// 	}
// };

import { imgbbClient } from '../apis/external/imgbbClient';
import type { ImgbbResponse } from '../types/image';

export const uploadImageToImgbb = async (file: File): Promise<string> => {
	const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

	const formData = new FormData();
	formData.append('image', file);
	formData.append('key', apiKey);

	const { data } = await imgbbClient.post<ImgbbResponse>('', formData);

	return data.data.url;
};
