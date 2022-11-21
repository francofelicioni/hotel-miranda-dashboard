import styled from "styled-components";

const DashBoardContainer = styled.div`
`;

const InsightsCardsContainer = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: repeat(4, 400px);
  gap: 1rem;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
`;

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export { DashBoardContainer, InsightsCardsContainer, ReviewsContainer };
