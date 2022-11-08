import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #131086, #b621f3);
  display: grid;
  grid-template-columns: 50% 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

const LoginLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 25%;

  @media (max-width: 768px) {
    padding: 2rem;
    gap:0;
  }
`;

const LoginHeader = styled.div`
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 1rem;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
`;

const Description = styled.p`
  color: white;
  font-size: 1.2rem;
`;

const Form = styled.form`
  padding: 1rem 0;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  @media (max-width: 768px) {
    gap: .5;
  }
`;


const FormItem = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  border: none;
  background: linear-gradient(45deg, #131086, #b621f3);
  color: white;
  padding: 0 1rem;
  border-radius: 100px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.5rem;
  height: 40px;
  cursor: pointer;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const LoginRigth = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem 1rem 2rem;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 100px;
`;

const Desc = styled.p`
  color: black;
  font-size: 1.2rem;
`;

export {
  Container,
  LoginLeft,
  LoginHeader,
  Title,
  Description,
  Form,
  FormContent,
  FormItem,
  CheckboxContainer,
  Button,
  LoginRigth,
  Image,
  Desc,
};
