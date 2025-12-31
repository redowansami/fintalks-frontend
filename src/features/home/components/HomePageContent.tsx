import { StoryListSection } from '../../story';
import type { Story } from '../../story';
import '../styles/HomePage.css';

interface HomePageContentProps {
	stories: Story[];
	isPending: boolean;
	pageTitle: string;
	activeCategory: string | null;
	show: boolean;
	children?: React.ReactNode;
}

export const HomePageContent: React.FC<HomePageContentProps> = ({
	stories,
	isPending,
	pageTitle,
	show,
	children,
}) => {
	return (
		<main className="homepage">
			<div className={`main-content ${!show ? 'no-sidebar' : ''}`}>
				<StoryListSection stories={stories} isPending={isPending} pageTitle={pageTitle} />
				{children}
			</div>
		</main>
	);
};
