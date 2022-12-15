import React from "react";

import {
  Card,
  Container,
  Icon,
  InfoContainer,
  Number,
  Title,
} from "./InsightsCards_sc";

interface KPIS {
  icon: React.ReactNode,
  number: number;
  title: string;
}

const InsightsCards = ({ icon, number, title } : KPIS): JSX.Element => {
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
