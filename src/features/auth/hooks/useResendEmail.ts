import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

export const useResendEmail = (onResend: (email: string) => Promise<unknown>) => {
	const [message, setMessage] = useState('');
	const mutation = useMutation({
		mutationFn: onResend,
	});

	useEffect(() => {
		if (mutation.isSuccess) {
			const messageTimer = setTimeout(() => {
				setMessage('Email resent successfully! Check your inbox.');
			}, 0);
			const clearTimer = setTimeout(() => setMessage(''), 3000);
			return () => {
				clearTimeout(messageTimer);
				clearTimeout(clearTimer);
			};
		}
	}, [mutation.isSuccess]);

	return {
		isPending: mutation.isPending,
		message,
		mutate: mutation.mutate,
	};
};
