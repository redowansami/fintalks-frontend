import type { BaseResponse } from './base';

export interface Category {
	categoryId: string;
	name: string;
	description: string;
}

export interface CategoryResponse extends BaseResponse {
	data: Category[];
}
