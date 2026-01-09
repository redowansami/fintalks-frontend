import axios from 'axios';
import type { ImgbbResponse } from '../../types/image';

const IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

export const imageApi = {
	upload: (formData: FormData) =>
		axios.post<ImgbbResponse>(IMGBB_API_URL, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			timeout: 15000,
		}),
};
