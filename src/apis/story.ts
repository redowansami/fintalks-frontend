import { apiClient } from '../services/apiClient';
import type {
	StoriesResponse,
	StoryDetailResponse,
	CreateStoryApiPayload,
	CreateStoryResponse,
} from '../types/story';

export const storyApi = {
	getAll: (params?: { category?: string | null; startAfter?: string | null }) => {
		return apiClient.get<never, StoriesResponse>('/stories', {
			params: {
				limit: 5,
				category: params?.category,
				startAfter: params?.startAfter,
			},
		});
	},

	getById: (storyId: string) => apiClient.get<never, StoryDetailResponse>(`/stories/${storyId}`),

	create: (data: CreateStoryApiPayload) =>
		apiClient.post<never, CreateStoryResponse>('/stories', data),
};
