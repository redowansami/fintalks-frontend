import { storyApi } from '../apis/story';
import { uploadImageToImgbb } from './imageUploadService';
import type { CreateStoryInput, StoriesResponse, StoryDetail } from '../interfaces/services/story';

export const storyService = {
	async getStories(
		category?: string | null,
		startAfter?: string | null,
	): Promise<StoriesResponse> {
		return await storyApi.getAll({ category, startAfter });
	},

	async getStoryDetail(storyId: string): Promise<StoryDetail> {
		const data = await storyApi.getById(storyId);
		return data.story;
	},

	async createStory(input: CreateStoryInput) {
		let imageUrl = '';

		if (input.imageFile) {
			try {
				imageUrl = await uploadImageToImgbb(input.imageFile);
			} catch (error) {
				throw new Error('Failed to upload image. Story was not created.');
			}
		}

		const apiPayload = {
			title: input.title,
			body: input.body,
			categoryIds: input.categoryIds,
			imageUrl: imageUrl || undefined,
		};

		return await storyApi.create(apiPayload);
	},
};
