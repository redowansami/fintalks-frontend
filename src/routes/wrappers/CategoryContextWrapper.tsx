import { Outlet } from 'react-router-dom';
import { CategoryProvider } from '../../contexts/CategoryContext';

export const CategoryContextWrapper = () => (
	<CategoryProvider>
		<Outlet />
	</CategoryProvider>
);
