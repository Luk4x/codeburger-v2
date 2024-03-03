import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    background: #EFEFEF;
  }

  ::selection {
    background: #9758a6;
    color: #fff;
  }
`;
