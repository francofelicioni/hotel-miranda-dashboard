import styled from "styled-components";

const Navbar = styled.header`
  width: 80%;
  margin-left: 20%;
  height: 140px;
  display: flex;
  justify-content:center;
  background: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
`;
const Rigth = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 2rem;
  align-items: center;
  gap: 1rem;
  flex:1;
`;

const IconContainer = styled.div``;

export {
  Navbar,
  Container,
  Title,
  SearchContainer,
  Input,
  Rigth,
  IconContainer,
};
