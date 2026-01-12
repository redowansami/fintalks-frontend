import type { Category } from '../common/category';
import type { Story } from '../common/story';

export type StoryMetaProps = Pick<Story, 'username' | 'createdAt' | 'updatedAt'>;

export type StoryCardProps = Story;

export interface StoryCategoriesProps {
	selectedIds: string[];
	onChange: (ids: string[]) => void;
}

export interface StoryImageProps {
	src?: string;
	alt: string;
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
