import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export interface Story {
	storyId: string;
	username: string;
	title: string;
	body: string;
	summary: string;
	reliabilityScore: number;
	createdAt: string;
	categories: Array<{ name: string }>;
	imageUrl?: string;
}

export interface StoryDetail extends Story {
	image?: string;
	predictionComparison?: string;
	categories: Array<{ categoryId: string; name: string }>;
	updatedAt?: string;
}

export interface StoriesResponse {
	list: Story[];
	nextCursor?: string | null;
}

export interface StoryDetailResponse {
	story: StoryDetail;
}

export interface CreateStoryPayload {
	title: string;
	body: string;
	imageUrl?: string;
	categoryIds: string[];
}

export interface CreateStoryResponse {
	success: boolean;
	message: string;
	story: Story;
}

export class StoryError extends Error {
	validationErrors?: Record<string, string | string[]>;

	constructor(message: string, validationErrors?: Record<string, string | string[]>) {
		super(message);
		this.name = 'StoryError';
		this.validationErrors = validationErrors;
	}
}

export const storyService = {
	async fetchStories(
		category?: string | null,
		startAfter?: string | null,
	): Promise<StoriesResponse> {
		const params = new URLSearchParams();
		params.append('limit', '5');

		if (category) {
			params.append('category', category);
		}

		if (startAfter) {
			params.append('startAfter', startAfter);
		}

		const url = `${API_BASE_URL}/stories?${params.toString()}`;
		const response = await axios.get<StoriesResponse>(url);
		return response.data;
	},

	async fetchStoryDetail(storyId: string): Promise<StoryDetailResponse> {
		const response = await axios.get<StoryDetailResponse>(`${API_BASE_URL}/stories/${storyId}`);
		return response.data;
	},

	async createStory(
		token: string | null,
		data: CreateStoryPayload,
	): Promise<CreateStoryResponse> {
		if (!token) {
			throw new StoryError('No authentication token found');
		}

		try {
			const response = await axios.post<CreateStoryResponse>(
				`${API_BASE_URL}/stories`,
				data,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
					timeout: 15000,
				},
			);

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.code === 'ECONNABORTED') {
					throw new StoryError(
						'Request timeout: Please check your connection and try again.',
					);
				}
				const message = error.response?.data?.message || 'Failed to create story';
				const validationErrors = error.response?.data?.errors as
					| Record<string, string | string[]>
					| undefined;
				throw new StoryError(message, validationErrors);
			}
			throw error instanceof Error ? error : new StoryError('An unexpected error occurred');
		}
	},
};
