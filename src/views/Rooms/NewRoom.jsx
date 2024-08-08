import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectRooms, fetchRooms } from "../../features/rooms/roomsSlice";
import MainContainer from "../../components/MainContainer/MainContainer";

import {
  Title,
  Form,
  Container,
  Label,
  Checkbox,
  Input,
  Select,
  ButtonContainer,
} from "./NewRoom_sc";
import { ClearButton, NewButton } from "../../components/Blocks/Button";

const NewRoom = () => {
  const [imageLoaded, setImageLoaded] = useState(null);
  const [roomObject, setRoomObject] = useState({
    id: "",
    images: [],
    bed_type: "",
    room_number: "",
    description: "",
    price: "",
    offer: "",
    offer_price: "",
    cancellation: "",
    facilities: [],
    status: true,
  });

  const { id } = useParams();
  const roomsRedux = useSelector(selectRooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
    setRoomObject(
      id
        ? { ...roomObject, id: id }
        : { ...roomObject, id: parseInt(roomsRedux.length) + 1 }
    );
  }, []);

  const imageHandler = (e) => {
    return setRoomObject({
      ...roomObject,
      images: [...roomObject.images, imageLoaded],
    });
  };

  const [value, setValue] = useState("default");

  const handleSave = (e) => {
    e.preventDefault();
  };
  const handleClear = (e) => {
    e.preventDefault();
  };

  return (
    <MainContainer>
      <Title>Add a new room</Title>

      <Form action="">
        <Container>
          <Label htmlFor="load-images">Select images (max. 5 images) :</Label>
          <Input
            name="load-images"
            type="file"
            style={{ width: "32%" }}
            onChange={(e) => setImageLoaded(e.target.files[0])}
          />
          <ClearButton onClick={imageHandler}>Upload</ClearButton>
        </Container>

        <Container>
          <Label>Select bed type : </Label>
          <Select
            defaultValue={value}
            onSelect={() =>
              setRoomObject({ ...roomObject, bed_type: "Single" })
            }
          >
            <option value="default" disabled hidden>
              {" "}
              Select bed type{" "}
            </option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Double Superior">Double Superior</option>
            <option value="Suite">Suite</option>
          </Select>
        </Container>
        <Container>
          <Label htmlFor="roomNumber">Room number :</Label>
          <Input
            name="roomNumber"
            type="number"
            min={100}
            placeholder={"Add a room number"}
            style={{ width: "250px", textAlign: "center" }}
          />
        </Container>
        <Container>
          <Label htmlFor="description">
            Room description (max. 100 characters) :
          </Label>
          <Input
            name="description"
            type="text"
            maxLength={100}
            placeholder={"Add a room description"}
            style={{ width: "600px", textAlign: "left", paddingLeft: "1rem" }}
          />
        </Container>
        <Container>
          <Label htmlFor="price">Room rate : </Label>
          <div>
            €{" "}
            <Input
              name="price"
              type="number"
              placeholder={"Add a room rate"}
              style={{ width: "200px", textAlign: "center" }}
            />
          </div>
        </Container>
        <Container>
          <Label htmlFor="offer">Room is on offer :</Label>
          <Checkbox name="offer" type="checkbox" />
        </Container>
        <Container>
          <Label htmlFor="offer-percentage">Room offer percentage :</Label>
          <Input
            name="offer-percentage"
            type="number"
            placeholder={"Add a discount (%)"}
            style={{ width: "220px", textAlign: "center" }}
          />
        </Container>
        <Container>
          <Label htmlFor="cancellation">Room cancellation policy :</Label>
          <Input
            name="cancellation"
            type="text"
            placeholder={"Add a cancellation policy"}
            style={{ width: "600px", textAlign: "left", paddingLeft: "1rem" }}
            s
          />
        </Container>

        <ButtonContainer>
          <NewButton type="submit" onClick={handleSave}>
            Save
          </NewButton>
          <ClearButton type="submit" onClick={handleClear}>
            Clear
          </ClearButton>
        </ButtonContainer>
      </Form>
    </MainContainer>
  );
};
export default NewRoom;
