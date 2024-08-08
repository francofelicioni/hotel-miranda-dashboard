import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooking,
  selectBooking,
} from "../../features/bookings/bookingsSlice";
import MainContainer from "../../components/MainContainer/MainContainer";

import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import Slider from "../../components/Slider/Slider";

import {
  BookingContainer,
  Container,
  FirstContainer,
  ChecksContainer,
  Left,
  Line,
  Column,
  IconContainer,
  ButtonContainer,
  GuestName,
  Id,
  Description,
  TextIcon,
  RoomType,
  Price,
  Span,
  Date,
  Image,
  FacilitiesGrid,
  Facility,
  ImageDetailsContainer,
} from "./Booking_sc";

const Booking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const booking = useSelector(selectBooking);

  useEffect(() => {
    dispatch(fetchBooking(id));
  }, [dispatch, id]);

  return (
    <MainContainer>
      <BookingContainer>
        <Left>
          <FirstContainer>
            <Image src={booking.image} />
            <Column>
              <GuestName>{booking.full_name}</GuestName>
              <Id>ID: {booking.id}</Id>
              <Container>
                <IconContainer>
                  <BsFillTelephoneFill
                    style={{ width: "24px", height: "24px", color: "#135846" }}
                  />
                </IconContainer>
                <ButtonContainer>
                  <BiMessageRoundedDetail
                    style={{ width: "24px", height: "24px" }}
                  />
                  <TextIcon> Send Message</TextIcon>
                </ButtonContainer>
              </Container>
            </Column>
          </FirstContainer>
          <ChecksContainer>
            <Container>
              <Column>
                <p>Check In</p>
                <Date>{booking.check_in}</Date>
              </Column>
            </Container>
            <Container>
              <Column>
                <p>Check Out</p>
                <Date>{booking.check_out}</Date>
              </Column>
            </Container>
          </ChecksContainer>
          <Line />
          <Container>
            <Container>
              <Column>
                <p>Room Info</p>
                <RoomType>{booking.room_info.type}</RoomType>
              </Column>
            </Container>
            <Container>
              <Column>
                <p>Price</p>
                <Price>
                  {booking.price} <Span>/night</Span>
                </Price>
              </Column>
            </Container>
          </Container>
          <Container>
            <Description>
              Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.
              Vestibulum sed magna at nunc commodo placerat. Praesent blandit.
              Nam nulla. Integer pede justo, lacinia eget, tincidunt eget,
              tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse
              ornare consequat lectus. In est risus, auctor sed, tristique in,
              tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.
            </Description>
          </Container>
          <Column>
            <p>Facilities</p>
            <FacilitiesGrid>
              {booking.facilities.map((facility, index) => (
                <Facility key={index}>{facility}</Facility>
              ))}
            </FacilitiesGrid>
            <Container></Container>
          </Column>
        </Left>
        <ImageDetailsContainer>
          <Slider
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            state={booking.state}
          />
        </ImageDetailsContainer>
      </BookingContainer>
    </MainContainer>
  );
};

export default Booking;
