import { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { profileService } from '../../services/profileService';
import type { UpdateProfileRequest } from '../../types/profile';

interface EditProfileState {
	name: string;
	bio: string;
}

export const useEditProfile = (initialData: EditProfileState, onSuccess: () => void) => {
	const queryClient = useQueryClient();
	const [formData, setFormData] = useState<EditProfileState>(initialData);

	const mutation = useMutation({
		mutationFn: (data: UpdateProfileRequest) => profileService.updateProfile(data),
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

	const saveProfile = () => {
		mutation.mutate({ name: formData.name, bio: formData.bio });
	};

	return {
		formData,
		handleChange,
		saveProfile,
		isLoading: mutation.isPending,
		error: mutation.error,
	};
};
