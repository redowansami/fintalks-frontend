interface LoginResponseProps {
	apiError: string;
	showResponse: boolean;
	successMessage: string;
	token: string | null;
}

export const LoginResponse = ({
	apiError,
	showResponse,
	successMessage,
	token,
}: LoginResponseProps) => {
	if (apiError) {
		return (
			<div className="error-banner">
				<p>{apiError}</p>
			</div>
		);
	}

	if (showResponse && token) {
		return (
			<div className="success-banner">
				<p>✓ {successMessage}</p>
				<div className="token-box">
					<p className="token-label">Token:</p>
					<p className="token-value">{token}</p>
				</div>
			</div>
		);
	}

	return null;
};
