import type { ErrorListProps } from '../../types/components/errorComponents/errorListProps';
import '../../styles/components/ErrorComponents/errorList.css';

export const ErrorList = ({ errors }: ErrorListProps) => {
	const allErrors = Object.values(errors).flat();

	return (
		<>
			{allErrors.map((error, idx) => (
				<div key={idx} className="error-list-item">
					<span className="error-list-bullet">•</span>
					<span>{error.trim()}</span>
				</div>
			))}
		</>
	);
};
