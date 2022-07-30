interface ThemeInterface {
	colors: {
		[key: string]: string;
	};
}

export const theme: ThemeInterface = {
	colors: {
		primary: '#f39c12',
		primaryDark: '#c47e0e',
		secondary: '#e74c3c',
		success: '#2ecc71',
		info: '#3498db',
		warning: '#d5791d',
		darkerBaseColor: '#f39c12',
		lighterBaseColor: '#ee8d8d',
		primaryTextColor: 'white',
		secondaryTextColor: '#bdbcbc',
	},
};
