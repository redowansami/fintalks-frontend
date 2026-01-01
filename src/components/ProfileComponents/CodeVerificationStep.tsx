import React from 'react';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { ErrorDialog } from '../ErrorComponents/ErrorDialog';
import { extractValidationErrors } from '../../utils/errorExtractor';

interface CodeVerificationStepProps {
	code: string;
	onCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	onBack: () => void;
	isPending: boolean;
	error: Error | null;
}

export const CodeVerificationStep: React.FC<CodeVerificationStepProps> = ({
	code,
	onCodeChange,
	onSubmit,
	onBack,
	isPending,
	error,
}) => (
	<form onSubmit={onSubmit} className="edit-profile-form">
		{error && (
			<ErrorDialog
				message={error.message || 'Failed to verify code'}
				validationErrors={extractValidationErrors(error)}
			/>
		)}
		<InputField
			label="Verification Code"
			id="code"
			name="code"
			type="text"
			placeholder="Enter the code sent to your email"
			value={code}
			onChange={onCodeChange}
			required
		/>
		<p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
			We've sent a verification code to your registered email address.
		</p>
		<div className="edit-profile-actions">
			<Button type="button" variant="secondary" onClick={onBack} disabled={isPending}>
				Back
			</Button>
			<Button type="submit" variant="primary" disabled={isPending}>
				{isPending ? 'Verifying...' : 'Verify Code'}
			</Button>
		</div>
	</form>
);
