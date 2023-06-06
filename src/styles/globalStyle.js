import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #6FFF57;
    --color-primary-focus: #36C81F;
    --color-primary-negative: #3A964E;
    --gray-0: #F8F9FA;
    --gray-1: #868E96;
    --gray-2: #343B41;
    --gray-3: #17191B;
    --gray-4: #121214;

    --radius: 4px;

    --bold-12: 600 0.75rem 'Inter', sans-serif ;
    --bold-14: 700 0.875rem 'Inter', sans-serif ;
    --bold-16: 700 1rem 'Inter', sans-serif ;
    --bold-18: 700 1.125 'Inter', sans-serif ;
    --regular-12: 400 0.75rem 'Inter', sans-serif ;
    --regular-16: 500 1rem 'Inter', sans-serif ;
  }

  button, .closeBtn{
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
    margin-top: 20px;
    margin-bottom: 20px;
  }

  main {
    height: 900px;
    width: 100%;
    #back-btn{
    margin: 0 auto;
    width: 50px;
    height: 50px;
    transition: 0.3s ease-in;
    border-radius: 50%;
    margin-top: 10px;
  }
  }

  #main-login {
    height: 600px;
  }



  a{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  li:hover, button:hover, a:hover {
    background-color: var(--gray-2);
  }
`;

export default GlobalStyle;

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

  form button {
    margin-top: 15px;
    border: none;
    max-width: 100%;
    height: 48px;
    color: black;
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
