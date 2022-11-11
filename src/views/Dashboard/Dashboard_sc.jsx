import styled from "styled-components";

const DashBoardContainer = styled.div`
  position: absolute;
  width: 80%;
  right: 0;
  bottom: 500px;
  /* background-color: red; */
`;

const InsightsCardsContainer = styled.div`
  display: grid;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: repeat(4, 300px);
  gap: 2rem;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
`;

const ReviewsContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 1rem;
`;

export { DashBoardContainer, InsightsCardsContainer, ReviewsContainer };
