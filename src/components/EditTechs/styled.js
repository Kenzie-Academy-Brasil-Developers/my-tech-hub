import styled from "styled-components";

export const EditBtns = styled.div`
  display: flex;
  justify-content: space-between;

  #save {
    width: 190px;
    @media (max-width: 370px) {
      margin-right: 10px;
    }
  }

  #delete {
    width: 98px;
    color: var(--gray-0);
    background-color: var(--gray-1);
    border-radius: var(--radius);
    font: var(--regular-16);
  }
`;
