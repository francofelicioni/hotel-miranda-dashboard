import styled from "styled-components";

export const BookingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 156px;
  gap: 0 2rem;
`;

export const ChecksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  margin-right: 3rem;
`;
export const Right = styled.div`
  display: flex;
  width: 50%;
`;
export const Line = styled.div`
  height: 2px;
  width: 100%;
  border-bottom: 2px solid #ececec;
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IconContainer = styled.button`
  border: 1px solid #e8f2ef;
  padding: 0.8rem;
  background-color: transparent;
  border-radius: 5px;
  margin-top: 1rem;
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 209px;
  height: 55px;
  background: #135846;
  color: white;
  border-radius: 12px;
  margin-top: 1rem;
`;

export const GuestName = styled.h1`
  width: 247px;
  height: 43px;
  text-align: left;
  font-family: var(--font-main);
  font-weight: 600;
  font-size: 30px;
  color: #212121;
`;

export const Id = styled.p`
  width: 100%;
  height: 20px;
  text-align: left;
  font-family: var(--font-main);
  font-size: 16px;
  color: #799283;
`;

export const Description = styled.p`
  width: 645px;
  height: 125px;
  text-align: left;
  font-family: var(--font-main);
  font-size: 14px;
  letter-spacing: 0px;
  color: #363636;
`;

export const TextIcon = styled.p`
  font-family: var(--font-main);
  font-size: 16px;
`;

export const RoomType = styled.p`
  width: 216px;
  height: 33px;
  text-align: left;
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 600;
  color: #212121;
`;

export const Price = styled.p`
  text-align: left;
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 600;
  color: #212121;
  opacity: 1;
`;

export const Span = styled.span`
  text-align: left;
  font-family: var(--font-main);
  font-size: 14px;
  font-weight: 500;
`;

export const Date = styled.p`
  font-weight: 600;
`;

export const Image = styled.img`
  width: 156px;
  height: 156px;
  border-radius: 10px;
`;

export const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
export const Facility = styled.div`
  padding: 1rem;
  text-align: center;
  color: #528678;
  font-weight: 600;
  border-radius: 10px;
  background-color: #e8f2ef;

  :hover {
    color: #e8f2ef;
    background: #528678;
  }
`;

export const Icon = styled.img``;

export const ImageDetailsContainer = styled.div`
  width: 50%;
  background-color: grey;
  display: inline-block;
  border-radius: 0 3% 3% 0;

  //Styles for navigation in Slider
  .swiper-button-prev {
    position: absolute;
    bottom: 6rem;
    width: 40px;
    padding: 10px;
    margin: 10px 20px;
    border: 1px solid var(--color-black);
    z-index: 1;
    fill: #135846;
    background: rgba(110, 110, 110, 0.5);
    filter: invert(1);
    content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDY0LjM0NCwyMDcuNDE4bDAuNzY4LDAuMTY4SDEzNS44ODhsMTAzLjQ5Ni0xMDMuNzI0YzUuMDY4LTUuMDY0LDcuODQ4LTExLjkyNCw3Ljg0OC0xOS4xMjQNCgkJCWMwLTcuMi0yLjc4LTE0LjAxMi03Ljg0OC0xOS4wODhMMjIzLjI4LDQ5LjUzOGMtNS4wNjQtNS4wNjQtMTEuODEyLTcuODY0LTE5LjAwOC03Ljg2NGMtNy4yLDAtMTMuOTUyLDIuNzgtMTkuMDE2LDcuODQ0DQoJCQlMNy44NDQsMjI2LjkxNEMyLjc2LDIzMS45OTgtMC4wMiwyMzguNzcsMCwyNDUuOTc0Yy0wLjAyLDcuMjQ0LDIuNzYsMTQuMDIsNy44NDQsMTkuMDk2bDE3Ny40MTIsMTc3LjQxMg0KCQkJYzUuMDY0LDUuMDYsMTEuODEyLDcuODQ0LDE5LjAxNiw3Ljg0NGM3LjE5NiwwLDEzLjk0NC0yLjc4OCwxOS4wMDgtNy44NDRsMTYuMTA0LTE2LjExMmM1LjA2OC01LjA1Niw3Ljg0OC0xMS44MDgsNy44NDgtMTkuMDA4DQoJCQljMC03LjE5Ni0yLjc4LTEzLjU5Mi03Ljg0OC0xOC42NTJMMTM0LjcyLDI4NC40MDZoMzI5Ljk5MmMxNC44MjgsMCwyNy4yODgtMTIuNzgsMjcuMjg4LTI3LjZ2LTIyLjc4OA0KCQkJQzQ5MiwyMTkuMTk4LDQ3OS4xNzIsMjA3LjQxOCw0NjQuMzQ0LDIwNy40MTh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");
    border-radius: 5px;
  }

  .swiper-button-next {
    position: absolute;
    transform: rotate(180deg);
    bottom: 6rem;
    border: 1px solid var(--color-black);
    width: 40px;
    padding: 10px;
    right: 0;
    margin: 10px 20px;
    z-index: 1;
    background: rgba(110, 110, 110, 0.5);
    filter: invert(1);
    content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDY0LjM0NCwyMDcuNDE4bDAuNzY4LDAuMTY4SDEzNS44ODhsMTAzLjQ5Ni0xMDMuNzI0YzUuMDY4LTUuMDY0LDcuODQ4LTExLjkyNCw3Ljg0OC0xOS4xMjQNCgkJCWMwLTcuMi0yLjc4LTE0LjAxMi03Ljg0OC0xOS4wODhMMjIzLjI4LDQ5LjUzOGMtNS4wNjQtNS4wNjQtMTEuODEyLTcuODY0LTE5LjAwOC03Ljg2NGMtNy4yLDAtMTMuOTUyLDIuNzgtMTkuMDE2LDcuODQ0DQoJCQlMNy44NDQsMjI2LjkxNEMyLjc2LDIzMS45OTgtMC4wMiwyMzguNzcsMCwyNDUuOTc0Yy0wLjAyLDcuMjQ0LDIuNzYsMTQuMDIsNy44NDQsMTkuMDk2bDE3Ny40MTIsMTc3LjQxMg0KCQkJYzUuMDY0LDUuMDYsMTEuODEyLDcuODQ0LDE5LjAxNiw3Ljg0NGM3LjE5NiwwLDEzLjk0NC0yLjc4OCwxOS4wMDgtNy44NDRsMTYuMTA0LTE2LjExMmM1LjA2OC01LjA1Niw3Ljg0OC0xMS44MDgsNy44NDgtMTkuMDA4DQoJCQljMC03LjE5Ni0yLjc4LTEzLjU5Mi03Ljg0OC0xOC42NTJMMTM0LjcyLDI4NC40MDZoMzI5Ljk5MmMxNC44MjgsMCwyNy4yODgtMTIuNzgsMjcuMjg4LTI3LjZ2LTIyLjc4OA0KCQkJQzQ5MiwyMTkuMTk4LDQ3OS4xNzIsMjA3LjQxOCw0NjQuMzQ0LDIwNy40MTh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");
    border-radius: 5px;
  }

  .swiper-button-prev:hover {
    background: rgba(110, 110, 110, 1);
  }

  .swiper-button-next:hover {
    background: rgba(110, 110, 110, 1);
  }
`;
