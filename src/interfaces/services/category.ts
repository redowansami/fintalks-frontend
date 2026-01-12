import type { BaseResponse } from './base';
import type { Category } from '../common/category';

export interface CategoryResponse extends BaseResponse {
	data: Category[];
}
