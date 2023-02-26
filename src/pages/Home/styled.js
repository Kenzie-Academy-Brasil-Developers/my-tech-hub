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
`;

export const HomeSection = styled.section`
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 40px;
  height: 100vh;
  margin-bottom: 100px;

  ul {
    background-color: var(--gray-3);
    border-radius: var(--radius);
    padding: 23px 26px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 760px;
    max-width: 100%;
  }

  li {
    margin: 0 auto;
    display: flex;
    width: 100%;
    height: 49px;
    padding: 0px 13px;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--radius);
    text-transform: capitalize;
    background-color: var(--gray-4);
    cursor: pointer;
  }

  h3 {
    font: var(--bold-14);
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  #title {
    font: var(--bold-16);
  }

  button {
    width: 32px;
    height: 32px;
    background-color: var(--gray-3);
    border: none;
    border-radius: var(--radius);
    color: var(--gray-0);
    font-size: 22px;
  }

  p {
    font: var(--regular-12);
    color: var(--gray-1);
  }

  #no-tech {
    margin: 0 auto;
  }
`;

export const Nav = styled.nav`
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 38px;
  height: 40px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #logOut {
    padding: 5px 16px;
    width: fit-content;
    height: 32px;
    border-radius: var(--radius);
    background-color: var(--gray-3);
    color: var(--gray-0);
    font: var(--bold-12);
    border: none;
  }
`;
