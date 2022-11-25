import React from "react";

import {
  DashBoardContainer,
  InsightsCardsContainer,
  ReviewsContainer,
} from "./Dashboard_sc";

import InsightsCards from "../../components/InsightsCards/InsightsCards";
import Reviews from "../../components/Reviews/Reviews";
import MainContainer from "../../components/MainContainer/MainContainer";

const Dashboard = () => {
  return (
    <>
      <MainContainer>
        <DashBoardContainer>
          <InsightsCardsContainer>
            <InsightsCards />
            <InsightsCards />
            {/* <InsightsCards /> */}
            {/* <InsightsCards /> */}
          </InsightsCardsContainer>
          <ReviewsContainer>
            <Reviews />
            {/* <Reviews /> */}
            <Reviews />
          </ReviewsContainer>
        </DashBoardContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
