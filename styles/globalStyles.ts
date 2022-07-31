import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

  a,
  button,
  input,
  svg {
    cursor: pointer;
    vertical-align: sub;
  }

  h1,
  h2,
  h3 {
	  font-family: Helvetica, Arial, sans-serif;
	  font-weight: bold;
	  line-height: 1;
  }
  
  a {
	  transition: 0.2s;
    text-decoration: none;
    color: white;
    font-weight:300;
  }

  button {
    background: none;
    border: none;
    outline: none;
    color: white;
    transition: 0.5s;
  }
`;

export default GlobalStyle;
