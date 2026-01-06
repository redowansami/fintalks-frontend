import { AdvertisementSpace } from './SideBar/AdvertisementSpace';
import { MarketMovers } from './SideBar/MarketMovers';

interface HomeSidebarProps {
	show: boolean;
}

export const HomeSidebar: React.FC<HomeSidebarProps> = ({ show }) => {
	if (!show) return null;

	return (
		<div className="sidebar">
			<MarketMovers />
			<AdvertisementSpace />
		</div>
	);
};
