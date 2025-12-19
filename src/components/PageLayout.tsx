import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
	children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen w-screen flex flex-col bg-gray-50">
			<Header />
			<main className="flex-grow flex items-center justify-center py-12 px-4 w-full">
				{children}
			</main>
			<Footer />
		</div>
	);
};
