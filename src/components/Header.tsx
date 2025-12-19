import React from 'react';

export const Header: React.FC = () => {
	return (
		<header className="border-b border-gray-300 bg-white sticky top-0 z-50 pl-18">
			<div className="flex justify-between items-center h-20">
				<a className="font-serif text-4xl font-bold text-blue-900" href="/">
					FinTalks
				</a>
			</div>
		</header>
	);
};
