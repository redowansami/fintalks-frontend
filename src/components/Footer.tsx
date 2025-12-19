import React from 'react';

export const Footer: React.FC = () => {
	return (
		<footer className="bg-blue-900 text-white mt-auto pr-16">
			<div className="flex justify-end items-end py-12">
				<div className="text-right">
					<span className="font-serif text-2xl font-bold">FinTalks</span>
					<p className="text-sm text-gray-300 mt-2">© 2025 Cefalo Bangladesh Ltd</p>
				</div>
			</div>
		</footer>
	);
};
