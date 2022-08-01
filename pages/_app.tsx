import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import { theme } from '../styles/theme';
import { AnimatePresence } from 'framer-motion';

import Nav from '../components/nav/Nav';

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Nav />
				<Head>
					<title>Shutter</title>
					<meta name="description" content="Shutter Home" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap" rel="stylesheet" />
				</Head>
				<AnimatePresence exitBeforeEnter initial={false}>
					<Component {...pageProps} />
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}
