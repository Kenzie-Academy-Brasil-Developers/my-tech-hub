import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavRegister = styled.nav`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 370px;
  height: 40px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const LinkToLogin = styled(Link)`
  padding: 5px 16px;
  width: fit-content;
  height: 32px;
  border-radius: var(--radius);
  background-color: var(--gray-3);
  color: var(--gray-0);
  font: var(--bold-12);
`;
