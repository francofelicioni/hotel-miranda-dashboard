import styled from "styled-components";

const DashBoardContainer = styled.div``;

const InsightsCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly ;
  align-items:center;
  gap: 1rem;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    padding:0;
  }
`;

const GeneralInsights = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  DashBoardContainer,
  InsightsCardsContainer,
  GeneralInsights,
  ReviewsContainer,
};
