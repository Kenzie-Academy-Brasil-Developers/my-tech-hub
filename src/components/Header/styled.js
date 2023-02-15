import styled from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
  max-width: 100%;
  width: 800px;
  padding: 0px 20px;

  #user-info {
    height: 118px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-3);
    @media (max-width: 680px) {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: baseline;
    }
  }

  #user-info p {
    font: var(--regular-12);
    color: var(--gray-1);
  }

  nav {
    margin-bottom: 0px;
  }

  p {
    font: var(--regular-16);
  }

  #intro {
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 40px;
  }
`;
