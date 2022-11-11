import React from "react";

import { DashBoardContainer, InsightsCardsContainer,  ReviewsContainer } from "./Dashboard_sc";

import InsightsCards from "../../components/InsightsCards/InsightsCards";
import Reviews from "../../components/Reviews/Reviews";

const Dashboard = () => {
  return (
    <>
      <DashBoardContainer>
        <InsightsCardsContainer>
          <InsightsCards />
          <InsightsCards />
          <InsightsCards />
          <InsightsCards />
        </InsightsCardsContainer>
        <ReviewsContainer>
          <Reviews />
          <Reviews />
          <Reviews />
        </ReviewsContainer>
      </DashBoardContainer>
    </>
  );
};

export default Dashboard;
