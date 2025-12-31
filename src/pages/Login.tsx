import { Footer } from '../components';
import { Header } from '../components/Blank_Header';
import { Spinner } from '../components/Spinner';
import {
	LoginPageContent,
	useLoginForm,
	useLoginHandler,
	resendConfirmationEmail,
} from '../features/auth';

export const Login = () => {
	const { formData, errors, handleInputChange, validateForm } = useLoginForm();

	const { isPending, isError, error, validationErrors, mutate } = useLoginHandler();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;
		mutate(formData);
	};

	return (
		<>
			{isPending && <Spinner />}
			<Header />
			<LoginPageContent
				formData={formData}
				errors={errors}
				isPending={isPending}
				isError={isError}
				error={error}
				validationErrors={validationErrors}
				onInputChange={handleInputChange}
				onSubmit={handleSubmit}
				onResend={resendConfirmationEmail}
			/>
			<Footer />
		</>
	);
};
