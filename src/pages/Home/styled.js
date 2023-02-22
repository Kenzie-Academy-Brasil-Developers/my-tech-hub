import styled from "styled-components";

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
