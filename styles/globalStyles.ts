import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: scroll;
	  overflow: overlay;
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

    /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border: 3px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 1rem;
    background-color: rgba(101, 101, 101, 0.5);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    border: 3px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 1rem;
    background-color: rgba(35, 35, 35, 0.8);
  }
`;

export default GlobalStyle;
