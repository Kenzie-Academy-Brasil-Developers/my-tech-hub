import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --gray-0: #F8F9FA;
        --gray-1: #868E96;
        --gray-2: #343B41;
        --gray-3: #212529;
        --gray-4: #121214;

        --radius: 4px;

        --bold-12: 600 0.75rem 'Inter', sans-serif ;
        --bold-16: 700 1rem 'Inter', sans-serif ;
        --bold-18: 700 1.125 'Inter', sans-serif ;
        --regular-12: 400 0.75rem 'Inter', sans-serif ;
        --regular-16: 500 1rem 'Inter', sans-serif ;
    }

    button{
      cursor: pointer;
    }
    
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }
    
    body{
      background-color: var(--gray-4);
      font: var(--regular-16);
      color: var(--gray-0);
    }

    &.logo{
      display: flex;
      justify-content: center;
      margin-top: 77px;
      margin-bottom: 35px;
    }

    main {
    height: 900px;
    width: 100%;
    }

    #main-login {
    height: 600px;
  }

    nav {
    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 38px;
    height: 40px;
    width: 370px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
      @media (max-width: 800px) {
      width: 70%;
      }
      @media (max-width: 450px) {
      width: 300px;
      }
    }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
    `;

export default GlobalStyle;

export const LinkToLogin = styled(Link)`
  padding: 5px 16px;
  width: fit-content;
  height: 32px;
  border-radius: var(--radius);
  background-color: var(--gray-3);
  color: var(--gray-0);
  font: var(--bold-12);
`;

export const LinkSubmit = styled(Link)`
  margin: 0 auto;
  background-color: var(--gray-1);
  width: 324px;
  max-width: 100%;
  height: 48px;
  border-radius: var(--radius);
  color: var(--gray-0);
`;

export const Container = styled.div`
  max-width: 100%;
  width: 370px;
  margin: 0 auto;
  background-color: var(--gray-3);
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 450px) {
    width: 300px;
  }

  section {
    padding: 42px 20px;
    max-width: 100%;
  }

  section h3 {
    text-align: center;
    font: var(--bold-18);
    margin-bottom: 20px;
  }

  section p {
    text-align: center;
    color: var(--gray-1);
    font: var(--bold-12);
    margin-top: 34px;
    margin-bottom: 22px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    font: var(--regular-12);
    max-width: 100%;
  }

  form input,
  select {
    max-width: 100%;
    height: 48px;
    border-radius: var(--radius);
    border: none;
    padding-left: 16px;
    background-color: var(--gray-2);
    color: var(--gray-1);
    font: var(--regular-16);
    outline: none;
  }

  form input::placeholder {
    font: var(--regular-16);
  }

  form input:focus,
  select:focus {
    font: var(--regular-16);
    outline-color: var(--gray-0);
    color: var(--gray-0);
  }

  form button {
    border: none;
    max-width: 100%;
    height: 48px;
    color: var(--gray-0);
    background-color: var(--color-primary);
    border-radius: var(--radius);
    font: var(--regular-16);
  }

  div {
    display: flex;
    flex-direction: column;
  }

  #register-section {
    height: 800px;
  }

  #register-form {
    height: 640px;
  }

  #description-register {
    margin: 0 auto;
    font: var(--regular-12);
    color: var(--gray-1);
    text-align: center;
    margin-bottom: 20px;
  }

  #submit {
    margin-top: 20px;
  }
`;
