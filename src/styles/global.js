import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html{
    min-height:100%;
    background-image: linear-gradient(#22202c, #402845);
  }

  body {
    -webkit-font-smoothing: antialiased;

  }

  body, input, button, textarea {
    font: 14px 'Helvetica', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
