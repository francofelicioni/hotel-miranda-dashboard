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
import { Button } from "./Button";
import { Status } from "./Status";
import { Row } from "./TableBlocks";

type BookingObject = {
  guest: BookingsRowInt;
}

interface BookingsRowInt {
  id: string;
  full_name: string;
  order_date: string;
  check_in: string;
  check_out: string;
  room_info: any;
  price: number;
  image: string;
  special_request: string;
  description: string;
  state: boolean;
}

const BookingsRow = ({ guest }: BookingObject): JSX.Element => {
  console.log(guest)
  const handleClick = (special_request: string) => {
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
        <Button
          $type="notes"
          $special_request={guest.special_request}
          onClick={() => handleClick(guest.special_request)}
        >
          View Notes
        </Button>
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
        <button >
          <BsThreeDotsVertical />
        </button>
      </GuestContainer>
    </Row>
  );
};

export default BookingsRow;
