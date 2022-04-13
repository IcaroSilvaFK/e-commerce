import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-red : #ff6452;
    --color-blue: #4e99f6;
    --color-gray-50:#F2F6FC;
    --fontMont: 'Montserrat', sans-serif;
    --fontPoppins: 'Poppins', sans-serif;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,#root{
    width: 100%;
    height: 100vh;
  }

  body,input,a,button,textarea{
    font-family: var(--fontPoppins);
  }

  input,button{
    border: none;
    outline: none;
  }

  button{
    cursor: pointer;
  }

  ul,ol{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;
