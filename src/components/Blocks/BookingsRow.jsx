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

const BookingsRow = ({ guest }) => {
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
    <Row key={guest.id}>
      <GuestContainer>
        <Link to={`/bookings/${guest.id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Img src={guest.image} alt="Guest Image" />
            <div>
              <Name>{guest.full_name}</Name>
              <Id># {guest.id}</Id>
            </div>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${guest.id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Text>{guest.order_date}</Text>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${guest.id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Text>{guest.check_in}</Text>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${guest.id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Text>{guest.check_out}</Text>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <NotesButton
          specialRequest={guest.special_request}
          onClick={() => handleClick(guest.special_request)}
        >
          View Notes
        </NotesButton>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${guest.id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Text style={{ fontWeight: 600 }}>
              {guest.room_info.type} - {guest.room_info.number}
            </Text>
          </Container>
        </Link>
      </GuestContainer>
      <GuestContainer>
        <Link to={`/bookings/${guest.id}`} style={{ textDecoration: "none" }}>
          <Container>
            <Status $type="bookings" $typeStatus={guest.state}>
              {" "}
              {guest.state}
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
