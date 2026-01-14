import { AdvertisementSpace } from './AdvertisementSpace';
import { MarketMovers } from './MarketMovers';
import { TopAuthors } from './TopAuthors';
import type { ViewableProps } from '../../interfaces/components/ViewableProps';

export const HomeSidebar: React.FC<ViewableProps> = ({ isOpen }) => {
	if (!isOpen) return null;

	return (
		<div className="sidebar">
			<MarketMovers />
			<TopAuthors />
			<AdvertisementSpace />
		</div>
	);
};
