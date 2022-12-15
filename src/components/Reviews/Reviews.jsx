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

const Reviews = ({description, image, name, time }) => {
  return (
    <Container>
      {/* <Title> Latest Review by Customers </Title> */}
      <CardContainer>
        <Card>
          <Description>{description}</Description>
          <CardInfoContainer>
            <CardInfo>
              <Image src={image} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Name>{name}</Name>
                <Time>{time}</Time>
              </div>
            </CardInfo>
            <CardButtons>
              <AiOutlineCheckCircle style={{color:'green'}}/>
              <AiOutlineCloseCircle style={{color:'red'}}/>
            </CardButtons>
          </CardInfoContainer>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Reviews;
