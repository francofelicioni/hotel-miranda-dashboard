import React from "react";

import {
  Card,
  Container,
  Icon,
  InfoContainer,
  Number,
  Title,
} from "./InsightsCards_sc";

const InsightsCards = ({ icon, number, title }) => {
  return (
    <Card>
      <Container>
        <Icon>{icon}</Icon>
        <InfoContainer>
          <Number> {number} </Number>
          <Title> {title} </Title>
        </InfoContainer>
      </Container>
    </Card> 
  );
};

export default InsightsCards;
