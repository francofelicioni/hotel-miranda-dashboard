import React from "react";

import {
  Container,
  CardContainer,
  Card,
  Description,
  CardInfoContainer,
  CardInfo,
  Image,
  Name,
  Time,
  CardButtons,
} from "./Reviews_sc";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Reviews = () => {
  return (
    <Container>
      {/* <Title> Latest Review by Customers </Title> */}
      <CardContainer>
        <Card>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Description>
          <CardInfoContainer>
            <CardInfo>
              <Image />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Name>Kusnaidi Anderson</Name>
                <Time>4m ago</Time>
              </div>
            </CardInfo>
            <CardButtons>
              <AiOutlineCheckCircle />
              <AiOutlineCloseCircle />
            </CardButtons>
          </CardInfoContainer>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Reviews;
