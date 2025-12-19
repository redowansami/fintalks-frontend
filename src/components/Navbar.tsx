import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

interface Category {
	id: string;
	name: string;
	slug?: string;
}

export const Navbar: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/categories/')
			.then((res) => res.json())
			.then((data) => {
				const catArray = Array.isArray(data) ? data : data?.data || data?.categories || [];
				setCategories(catArray);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error fetching categories:', err);
				setLoading(false);
			});
	}, []);

	return (
		<nav className="navbar">
			<div className="navbar-content">
				<ul className="nav-list">
					<li>
						<a href="/" className="nav-link">
							Home
						</a>
					</li>
					{loading
						? null
						: categories && Array.isArray(categories)
						? categories.map((cat) => (
								<li key={cat.id}>
									<a
										href={`/category/${cat.slug || cat.name.toLowerCase()}`}
										className="nav-link"
									>
										{cat.name}
									</a>
								</li>
						  ))
						: null}
				</ul>
			</div>
		</nav>
	);
};
