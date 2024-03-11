import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  body {
    background: darkgray;
    color: white;
    margin: 0;
    padding: 0;
    font-family: 'Your Font', sans-serif; /* Add your preferred font */
  }

  a {
    text-decoration: none;
    color: white;

    &:visited {
      color: white;
    }
  }

  li {
    list-style: none;
  }

  footer {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 20px;
    background-color: #113a78;
    color: white;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 60px;
    }
  }


  .sobre-nosotros {
    background-color: lightgrey;
    width: 75%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: 8%;
    padding: 5%;
    font-size: x-large;
  }
  
  .contacto-formulario {
    width: 100%;
    display: flex;
  
    align-items: center;
  
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 110px;
  }

  

  form {
 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 50%;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: larger;
    font-weight: bold;
  }

input,
textarea {
 
  padding: 5%;
  width: 80%;
}



`;

