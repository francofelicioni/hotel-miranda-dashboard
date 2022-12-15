import styled from "styled-components";

const Container = styled.div`
  padding-top: 2rem;
  margin: 1rem 0;
`;

const Title = styled.h3`
  text-align: left;
  color: var(--color-grey39);
  font-size: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 431px;

  @media (max-width: 1600px) {
    width: 300px;
  }
`;
const Description = styled.p`
  width: 100%;
  height: 107px;
  text-align: left;
  font-size: 16px;
  letter-spacing: 0px;
  color: var(--color-grey4E);
  overflow: hidden;
`;

const CardInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
  background: var(--color-greyC5);
  border-radius: 8px;
`;

const Name = styled.div`
  color: var(--color-grey26);
  text-align: left;
  font-weight: 600;
  font-size: 16px;
`;

const Time = styled.div`
  width: 55px;
  height: 20px;
  text-align: left;
  font-size: 14px;
  letter-spacing: 0px;
  color: var(--color-greenGrey);
`;

const CardButtons = styled.div`
  display: flex;
  align-items: center;
`;

export {
  Container,
  Title,
  CardContainer,
  Card,
  Description,
  CardInfoContainer,
  CardInfo,
  Image,
  Name,
  Time,
  CardButtons,
};
