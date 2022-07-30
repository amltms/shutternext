import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Nav from '../components/nav/Nav';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

interface ThemeInterface {
	colors: {
		primary: string;
	};
}

const theme: ThemeInterface = {
	colors: {
		primary: '#0070f3',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Nav />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
