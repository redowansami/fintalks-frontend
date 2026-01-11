import type { Story } from '../services/story';
import type { Category } from '../services/category';

export interface StoryCardProps {
	storyId: string;
	title: string;
	body: string;
	reliabilityScore: number;
	categories: Array<{ name: string }>;
	image?: string;
	username: string;
	createdAt: string;
}

export interface StoryCategoriesProps {
	selectedIds: string[];
	onChange: (ids: string[]) => void;
}

export interface StoryImageProps {
	src?: string;
	alt: string;
}

export interface StoryMetaProps {
	username: string;
	createdAt: string;
	updatedAt?: string;
}

export interface StoryTagsProps {
	categories: Category[];
}

export interface AIReliabilityCardProps {
	reliabilityScore: number;
	summary?: string;
	predictionComparison?: string;
	onComparisonClick?: () => void;
}

export interface StoryListSectionProps {
	stories: Story[];
	isPending: boolean;
	isLoadingMore: boolean;
	pageTitle: string;
	hasNextPage: boolean | undefined;
	onLoadMore: () => void;
}
