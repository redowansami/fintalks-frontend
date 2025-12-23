interface ErrorBannerProps {
	message: string;
}

export const ErrorBanner = ({ message }: ErrorBannerProps) => (
	<div className="error-banner">
		<p>{message}</p>
	</div>
);
