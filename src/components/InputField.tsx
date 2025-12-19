import React from 'react';

interface InputFieldProps {
	label: string;
	id: string;
	name: string;
	type?: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
	label,
	id,
	name,
	type = 'text',
	placeholder,
	value,
	onChange,
	required = false,
	error,
}) => {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
				className={`appearance-none block w-full px-3 py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm transition-colors ${
					error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
				}`}
			/>
			{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
		</div>
	);
};
