import type { BaseResponse } from './base';

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

export interface CreateStoryApiPayload {
	title: string;
	body: string;
	imageUrl?: string;
	categoryIds: string[];
}

export interface CreateStoryResponse extends BaseResponse {
	story: Story;
}

export interface CreateStoryInput {
	title: string;
	body: string;
	imageFile: File | null;
	categoryIds: string[];
}
