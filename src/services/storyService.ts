import { storyApi } from '../apis/story';
import { uploadImageToImgbb } from './imageUploadService';
import type { StoriesResponse, StoryDetail } from '../interfaces/services/story';
import type { StoryInput } from '../interfaces/services/story';

export const storyService = {
	async getStories(
		category?: string | null,
		startAfter?: string | null,
	): Promise<StoriesResponse> {
		return await storyApi.getAll({ category, startAfter });
	},

	async getStoriesByUserId(userId: string, startAfter?: string | null): Promise<StoriesResponse> {
		return await storyApi.getAllByUserId(userId, { startAfter });
	},

	async getStoryDetail(storyId: string): Promise<StoryDetail> {
		const data = await storyApi.getById(storyId);
		return data.story;
	},

	async createStory(input: StoryInput) {
		let imageUrl = '';

		if (input.imageFile) {
			imageUrl = await uploadImageToImgbb(input.imageFile);
		}

		const apiPayload = {
			title: input.title,
			body: input.body,
			categoryIds: input.categoryIds,
			imageUrl: imageUrl || undefined,
		};

		return await storyApi.create(apiPayload);
	},

	async deleteStory(storyId: string) {
		return await storyApi.delete(storyId);
	},

	async updateStory(storyId: string, input: StoryInput) {
		let imageUrl = '';

		if (input.imageFile) {
			imageUrl = await uploadImageToImgbb(input.imageFile);
		}

		const apiPayload = {
			title: input.title,
			body: input.body,
			categoryIds: input.categoryIds,
			imageUrl: imageUrl || undefined,
		};

		return await storyApi.update(storyId, apiPayload);
	},
};
