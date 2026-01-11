import { AdvertisementSpace } from './AdvertisementSpace';
import { MarketMovers } from './MarketMovers';
import type { HomeSidebarProps } from '../../interfaces/containers/home';

export const HomeSidebar: React.FC<HomeSidebarProps> = ({ show }) => {
	if (!show) return null;

	return (
		<div className="sidebar">
			<MarketMovers />
			<AdvertisementSpace />
		</div>
	);
};
