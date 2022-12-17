import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    color:white;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    box-sizing:border-box;
    color:white;
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

  textarea:focus,
  input:focus {
	  outline: none;
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

  p {
    font-size: 1.5rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 6rem;
    margin-bottom: 2rem;
  }


  button {
    background: none;
    border: none;
    outline: none;
    color: white;
    transition: 0.5s;
  }

  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
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

  @media screen and (max-width: 900px) {
		h1{
      font-size: 4rem;
    }
	}
`;

export default GlobalStyle;
