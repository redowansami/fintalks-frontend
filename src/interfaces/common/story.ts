import type { Category } from '../common/category';

export interface Story {
	storyId: string;
	username: string;
	title: string;
	body: string;
	reliabilityScore: number;
	createdAt: string;
	updatedAt?: string;
	categories: Category[];
	imageUrl?: string;
}

export interface StoryDetail extends Story {
	summary: string;
	predictionComparison?: string;
}

export interface StoryInput {
	title: string;
	body: string;
	imageFile: File | null;
	categoryIds: string[];
}
