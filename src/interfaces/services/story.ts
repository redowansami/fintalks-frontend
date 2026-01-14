import type { BaseResponse } from './base';
import type { Story, StoryDetail, StoryInput } from '../common/story';

export interface StoriesResponse {
	list: Story[];
	nextCursor?: string | null;
}

export interface StoryDetailResponse {
	story: StoryDetail;
}

export interface CreateStoryApiPayload extends Omit<StoryInput, 'imageFile'> {
	imageUrl?: string;
}

export interface CreateStoryResponse extends BaseResponse {
	story: Story;
}

export type { Story, StoryDetail, StoryInput };
