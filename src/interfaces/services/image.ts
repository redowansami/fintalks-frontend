export interface ImgbbResponse {
	data: {
		id: string;
		title: string;
		url: string;
		display_url: string;
		width: string;
		height: string;
		size: string;
		time: string;
		expiration: string;
		image: {
			filename: string;
			name: string;
			mime: string;
			extension: string;
			url: string;
		};
		thumb: {
			filename: string;
			name: string;
			mime: string;
			extension: string;
			url: string;
		};
		delete_url: string;
	};
	success: boolean;
	status: number;
}
