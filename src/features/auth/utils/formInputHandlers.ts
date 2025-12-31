import type { Dispatch, SetStateAction, ChangeEvent } from 'react';

export const createInputChangeHandler =
	<T extends object>(setFormData: Dispatch<SetStateAction<T>>) =>
	(e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};
