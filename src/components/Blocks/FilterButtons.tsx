import styled from "styled-components";

export const ListButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Selectors = styled.div`
  display: flex;
  align-items: center;
`;

export const Selector = styled.button`
  border: none;
  color: var(--color-grey6E);
  font-family: var(--font-main);
  background-color: transparent;
  height: 37px;
  display: flex;
  align-items: flex-start;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-greyD4);

  :hover {
    font-weight: 700;
    color: var(--color-greenDark);
    border-bottom: 2px solid var(--color-greenDark);
  }
`;

