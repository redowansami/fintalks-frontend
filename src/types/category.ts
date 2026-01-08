export interface Category {
	categoryId: string;
	name: string;
	description: string;
}

export interface CategoryResponse {
	success: boolean;
	message?: string;
	data: Category[];
}
