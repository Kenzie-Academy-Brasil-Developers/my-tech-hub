import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  @media (max-width: 370px) {
    padding: 0px 10px;
  }

  section {
    margin: 0 auto;
    margin-top: 120px;
    max-width: 100%;
    width: 342px;
    height: 349px;
    background-color: var(--gray-3);
  }

  form {
    height: 260px;
    padding: 0px 20px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #modal-header {
    padding: 20px;

    max-width: 100%;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--gray-2);
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
    border: none;
    max-width: 100%;
    height: 48px;
    background-color: var(--color-primary);
    border-radius: var(--radius);
    font: var(--regular-16);
  }

  label {
    color: var(--gray-0);
    font: var(--regular-12);
    margin-top: 12px;
  }
`;
