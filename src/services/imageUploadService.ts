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
