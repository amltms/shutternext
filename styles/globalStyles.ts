import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Helvetica;
    src: url(./fonts/HelveticaWorld-Regular.ttf);
  }

  @font-face {
    font-family: Helvetica;
    src: url(./fonts/HelveticaWorld-Bold.ttf);
    font-weight: bold;
  }
  
  *{
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	  background: black;
    font-family: 'Roboto';
  }
  
  a {
	  transition: 0.2s;
    text-decoration: none;
    color: white;
    font-weight:300;
  }

  h1,
  h2,
  h3 {
	  font-family: Helvetica, Arial, sans-serif;
	  font-weight: bold;
	  line-height: 1;
  }
`;

export default GlobalStyle;
