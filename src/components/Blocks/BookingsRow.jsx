import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
import {
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
        <Img src={guest.image} alt="Guest Image" />
        <div>
          <Name>{guest.full_name}</Name>
          <Id># {guest.id}</Id>
        </div>
      </GuestContainer>
      <DataContainer>
        <Text>{guest.order_date}</Text>
      </DataContainer>
      <DataContainer>
        <Text>{guest.check_in}</Text>
      </DataContainer>
      <DataContainer>
        <Text>{guest.check_out}</Text>
      </DataContainer>
      <td>
        <Button
          $type="notes"
          $special_request={guest.special_request}
          onClick={() => handleClick(guest.special_request)}
        >
          View Notes
        </Button>
      </td>
      <DataContainer>
        <Text style={{ fontWeight: 600 }}>
          {guest.room_info.type} - {guest.room_info.number}
        </Text>
      </DataContainer>
      <td>
        <Status $type="bookings" $typeStatus={guest.state}>
          {" "}
          {guest.state}
        </Status>
      </td>
      <DataContainer>
        <Button $type="delete">
          <BsThreeDotsVertical />
        </Button>
      </DataContainer>
    </Row>
  );
};

export default BookingsRow;
