import styled from "styled-components";

const DashBoardContainer = styled.div``;

const InsightsCardsContainer = styled.div`
  /* display: grid;
  justify-content: left;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto); */
  display: flex;
  justify-content: space-evenly ;
  align-items:center;
  gap: 1rem;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  

  @media (max-width: 1200px) {
    /* grid-template-columns: repeat(100px, auto); */
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    padding:0;
  }
`;

const GeneralInsigths = styled.div`
  height: 100%;
  display: flex;
  /* align-items: center; */
  gap: 1rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-auto-rows: minmax(100px, auto); */
  /* gap: 1rem; */

  /* @media (max-width: 1600px) {
    display: grid;
    grid-auto-columns: minmax(100px, auto);
    padding:0;
  } */
  
`;

export {
  DashBoardContainer,
  InsightsCardsContainer,
  GeneralInsigths,
  ReviewsContainer,
};
