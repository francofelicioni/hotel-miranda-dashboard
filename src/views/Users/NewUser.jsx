import React, { useState } from "react";
import { ClearButton, NewButton } from "../../components/Blocks/Button";
import MainContainer from "../../components/MainContainer/MainContainer";

import {
  Title,
  Form,
  Container,
  Label,
  Input,
  Select,
  ButtonContainer,
} from "../Rooms/NewRoom_sc";

const NewUser = () => {
  const [imageLoaded, setImageLoaded] = useState(null);
  const [userObject, setUserObject] = useState({
    id: "",
    images: [],
    full_name: "",
    email: "",
    contact: "",
    description: "",
    start_date: "",
    status: true,
    password: "",
  });

  const imageHandler = () => {
    return setUserObject({
      ...userObject,
      image: [...userObject.image, imageLoaded],
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
  }
  const handleClear = (e) => {
    e.preventDefault();
  }


  const [value, setValue] = useState("default");

  return (
    <MainContainer>
      <Title>Add a new user</Title>

      <Form action="">
        <Container>
          <Label htmlFor="load-images">Select images (max. 5 images) :</Label>
          <Input
            name="load-images"
            type="file"
            style={{ width: "32%" }}
            onChange={(e) => setImageLoaded(e.target.files[0])}
          />
          <ClearButton onClick={imageHandler}>
            Upload
          </ClearButton>
        </Container>

        <Container>
          <Label>Full name : </Label>
          <Input
            name="full_name"
            type="text"
            maxLength={100}
            placeholder="Add a full name"
            style={{ width: "300px", textAlign: "left", paddingLeft: '1rem' }}
          />
        </Container>

        <Container>
          <Label htmlFor="email">Email :</Label>
          <Input
            name="email"
            type="email"
            placeholder="Add an email"
            style={{ width: "200px", paddingLeft: '1rem' }}
          />
        </Container>
        <Container>
          <Label htmlFor="phone_number">Phone number :</Label>
          <Input
            name="phone_number"
            type="number"
            min={100}
            style={{ width: "250px", paddingLeft: '1rem' }}
            placeholder="Add a phone number"
          />
        </Container>
        <Container>
          <Label htmlFor="description">Job description : </Label>
          <Input
            name="description"
            type="text"
            maxLength={100}
            placeholder="Add a job description"
            style={{ width: "500px", textAlign: "left", paddingLeft: '1rem' }}
          />
        </Container>
        <Container>
          <Label htmlFor="start_date">Start date :</Label>
          <Input name="start_date" type="date" style={{ width: "200px" }} />
        </Container>
        <Container>
          <Label htmlFor="status">Status :</Label>
          <Select
            defaultValue={value}  
            onSelect={() => setUserObject({ ...userObject, status: {value} })}
            style={{ width: "1  00px" }}
          >
            <option value="default" disabled hidden>
              {" "}
              Select a status{" "}
            </option>
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </Select>
        </Container>
        <Container>
          <Label htmlFor="password">Password :</Label>
          <Input name="password" type="password" placeholder="Set a password" style={{ width: "300px", paddingLeft: '1rem' }} />
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

export default NewUser;
