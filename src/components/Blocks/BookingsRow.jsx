import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Container,
  DataContainer,
  GuestContainer,
  Id,
  Img,
  Name,
  Text,
} from "../../views/Bookings/Bookings_sc";
import { DeleteButton, NotesButton } from "./Button";
import { Status } from "./Status";
import { Row } from "./TableBlocks";

const BookingsRow = ({ booking }) => {
  const handleClick = (special_request) => {
    if (special_request) {
      Swal.fire({
        title: `${special_request}`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  return (
    <Row key={booking._id}>
      <GuestContainer>
        <Link to={`/bookings/${booking._id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Img src={booking.image} alt="Guest Image" />
            <div>
              <Name>{booking.full_name}</Name>
              <Id># {booking._id}</Id>
            </div>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${booking._id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Text>{booking.order_date}</Text>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${booking._id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Text>{booking.check_in}</Text>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${booking._id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Text>{booking.check_out}</Text>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <NotesButton
          specialRequest={booking.special_request}
          onClick={() => handleClick(booking.special_request)}
        >
          View Notes
        </NotesButton>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${booking._id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Text style={{ fontWeight: 600 }}>
              {booking.room_type} - {'100'}
            </Text>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${booking._id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Status $type="bookings" $typeStatus={booking.state}>
              {" "}
              {booking.state}
            </Status>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <DeleteButton>
          <BsThreeDotsVertical />
        </DeleteButton>
      </GuestContainer>
    </Row>
  );
};

export default BookingsRow;
