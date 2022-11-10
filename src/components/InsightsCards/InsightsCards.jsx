import React from "react";

import { Card, Container, Icon, InfoContainer, Number, Description } from "./InsightsCards_sc";

const InsightsCards = () => {
  return (
    <Card>
      <Container>
        <Icon />
        <InfoContainer>
          <Number> 213 </Number>
          <Description> New Booking </Description>
        </InfoContainer>
      </Container>
    </Card>
  );
};

export default InsightsCards;
