import React from "react";

import { MainContainer, Container, ReviewsContainer } from "./Dashboard_sc";

import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import InsightsCards from "../../components/InsightsCards/InsightsCards";
import Reviews from "../../components/Reviews/Reviews";

const Dashboard = () => {
  return (
    <>
        <Container>
          <InsightsCards />
          <InsightsCards />
          <InsightsCards />
          <InsightsCards />
          <ReviewsContainer>
            <Reviews />
            <Reviews />
            <Reviews />
          </ReviewsContainer>
        </Container>
    </>
  );
};

export default Dashboard;
