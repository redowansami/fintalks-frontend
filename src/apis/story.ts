import { apiClient } from '../services/apiClient';
import type {
	StoriesResponse,
	StoryDetailResponse,
	CreateStoryApiPayload,
	CreateStoryResponse,
} from '../interfaces/services/story';

export const storyApi = {
	getAll: (params?: {
		category?: string | null;
		startAfter?: string | null;
		search?: string | null;
	}) => {
		return apiClient.get<never, StoriesResponse>('/stories', {
			params: {
				limit: 5,
				category: params?.category,
				startAfter: params?.startAfter,
				search: params?.search,
			},
		});
	},

	getAllByUserId: (userId: string, params?: { startAfter?: string | null }) => {
		return apiClient.get<never, StoriesResponse>(`/stories/users/${userId}`, {
			params: {
				limit: 5,
				startAfter: params?.startAfter,
			},
		});
	},

	getById: (storyId: string) => apiClient.get<never, StoryDetailResponse>(`/stories/${storyId}`),

	create: (data: CreateStoryApiPayload) =>
		apiClient.post<never, CreateStoryResponse>('/stories', data),

	update: (storyId: string, data: CreateStoryApiPayload) =>
		apiClient.patch<never, CreateStoryResponse>(`/stories/${storyId}`, data),

	delete: (storyId: string) =>
		apiClient.delete<never, { message: string }>(`/stories/${storyId}`),
};
