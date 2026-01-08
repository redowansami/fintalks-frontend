import { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '../../../services/profileService';
import { useAuthContext } from '../../../hooks/useAuthContext';

interface EditProfileData {
	name: string;
	bio: string;
}

export const useEditProfile = (
	initialName: string,
	initialBio: string | null,
	onSuccess: () => void,
) => {
	const { token } = useAuthContext();
	const queryClient = useQueryClient();
	const [formData, setFormData] = useState<EditProfileData>({
		name: initialName,
		bio: initialBio || '',
	});

	const mutation = useMutation({
		mutationFn: (data: EditProfileData) => updateProfile(token, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
			onSuccess();
		},
	});

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			setFormData((prev) => ({ ...prev, [name]: value }));
		},
		[],
	);

	return { formData, handleChange, mutation };
};
