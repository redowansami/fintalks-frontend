import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export interface Story {
	storyId: string;
	title: string;
	body: string;
	summary: string;
	reliabilityScore: number;
	createdAt: string;
	categories: Array<{ name: string }>;
	imageUrl?: string;
}

export interface StoriesResponse {
	list: Story[];
}

export interface StoryDetailResponse {
	story: Story & {
		image?: string;
		summary?: string;
		predictionComparison?: string;
		categories: Array<{ categoryId: string; name: string }>;
		updatedAt?: string;
	};
}

export const storyService = {
	async fetchStories(category?: string | null): Promise<StoriesResponse> {
		const url = category
			? `${API_BASE_URL}/stories?category=${category}`
			: `${API_BASE_URL}/stories/`;

		const response = await axios.get<StoriesResponse>(url);
		return response.data;
	},

	async fetchStoryDetail(storyId: string): Promise<StoryDetailResponse> {
		const response = await axios.get<StoryDetailResponse>(`${API_BASE_URL}/stories/${storyId}`);
		return response.data;
	},
};
