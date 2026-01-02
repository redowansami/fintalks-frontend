import { StoryListSection } from '../../story';
import type { Story } from '../../story';

interface HomePageContentProps {
	stories: Story[];
	isPending: boolean;
	isLoadingMore: boolean;
	pageTitle: string;
	activeCategory: string | null;
	show: boolean;
	hasNextPage: boolean | undefined;
	onLoadMore: () => void;
	children?: React.ReactNode;
}

export const HomePageContent: React.FC<HomePageContentProps> = ({
	stories,
	isPending,
	isLoadingMore,
	pageTitle,
	show,
	hasNextPage,
	onLoadMore,
	children,
}) => {
	return (
		<main className="homepage">
			<div className={`main-content ${!show ? 'no-sidebar' : ''}`}>
				<StoryListSection
					stories={stories}
					isPending={isPending}
					isLoadingMore={isLoadingMore}
					pageTitle={pageTitle}
					hasNextPage={hasNextPage}
					onLoadMore={onLoadMore}
				/>
				{children}
			</div>
		</main>
	);
};
