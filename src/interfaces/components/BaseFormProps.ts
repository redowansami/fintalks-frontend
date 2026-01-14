import React from 'react';

export interface BaseFormProps<T> {
	formData: T;
	errors?: Partial<Record<keyof T, string>> & Record<string, string | undefined>;
	isPending?: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error?: Error | null;
}
