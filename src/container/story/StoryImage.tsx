interface StoryImageProps {
	src?: string;
	alt: string;
}

export const StoryImage: React.FC<StoryImageProps> = ({ src, alt }) => {
	const imageSrc =
		src ||
		'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23d4d4d8" width="800" height="400"/%3E%3C/svg%3E';

	return <img src={imageSrc} alt={alt} className="w-full max-h-120 mb-2 rounded-lg" />;
};
