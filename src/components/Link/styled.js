import styled from "styled-components";
import { Link } from "react-router-dom";

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
