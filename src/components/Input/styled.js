import styled from "styled-components";

export const InputItem = styled.input`
  max-width: 100%;
  height: 48px;
  border-radius: var(--radius);
  border: none;
  padding-left: 16px;
  background-color: var(--gray-2);
  color: var(--gray-1);
  font: var(--regular-16);
  outline: none;
  background-color: ${(props) => props.bg};

  input::placeholder {
    font: var(--regular-16);
  }

  input:focus,
  select:focus {
    font: var(--regular-16);
    outline-color: var(--gray-0);
    color: var(--gray-0);
  }
`;
