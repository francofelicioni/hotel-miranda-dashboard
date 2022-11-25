import styled from "styled-components";

const DashBoardContainer = styled.div``;

const InsightsCardsContainer = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  

  @media (min-width: 1200px) {
    /* grid-template-columns: repeat(100px, auto); */
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    padding:0;
  }
`;

const GeneralInsigths = styled.div`
  height: 200px;
`;

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;

  @media (min-width: 1200px) {
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    padding:0;
  }
  
`;

export {
  DashBoardContainer,
  InsightsCardsContainer,
  GeneralInsigths,
  ReviewsContainer,
};
