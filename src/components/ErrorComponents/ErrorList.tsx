import { parseErrorMessage } from '../../utils/errorParser';

interface ErrorListProps {
	errors: Record<string, string | string[]>;
}

export const ErrorList = ({ errors }: ErrorListProps) => {
	return (
		<div style={{ marginTop: '0.5rem', textAlign: 'left' }}>
			{Object.entries(errors).map(([field, value]) => {
				const errorList = parseErrorMessage(value);

				return (
					<div key={field}>
						{errorList.map((error, idx) => (
							<div
								key={idx}
								style={{
									marginBottom: '0.25rem',
									display: 'flex',
									alignItems: 'flex-start',
								}}
							>
								<span style={{ marginRight: '0.5rem', flexShrink: 0 }}>•</span>
								<span>{error.trim()}</span>
							</div>
						))}
					</div>
				);
			})}
		</div>
	);
};
