import styled from "styled-components";

const Card = styled.div`
  max-width: 300px;
  height: 125px;
  box-shadow: 0px 16px 30px #00000014;
  border-radius: 12px;

  @media (max-width: 1600px) {
    width: 220px;
    height: 120px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 1.2rem;
  gap: 1rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background: #fee0e0;
  color: #ea7070;

  :hover {
    color: white;
    background: #ea7070;
  }

  @media (min-width: 1200px) {
    width: 45px;
    height: 45px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GeneralInsights = styled.div`
  height: 30%;
  width: 50%;
`;

const Number = styled.h2`
  top: 199px;
  left: 890px;
  width: 56px;
  height: 43px;
  text-align: left;
  font-weight: 600;
  font-size: 30px;
  color: #393939;
`;

const Title = styled.h3`
  width: 118px;
  height: 20px;
  text-align: left;
  font-weight: 300;
  font-size: 14px;
  color: #787878;

  @media (max-width: 1200px) {
    width: 100%;
    height: 15px;
  }
`;

export { Card, Container, Icon, InfoContainer, GeneralInsights, Number, Title };
