import styled from "styled-components";

const Navbar = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 2rem;
  gap: 5rem;
`;

const Logo = styled.img`
  width: 150px;
  height: 57px;
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  /* gap: 4rem; */
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
`;
const Rigth = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IconContainer = styled.div``;

export {
  Navbar,
  Left,
  Logo,
  Center,
  Container,
  Title,
  SearchContainer,
  Input,
  Rigth,
  IconContainer,
};
