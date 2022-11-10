import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  height: 125px;
  box-shadow: 0px 16px 30px #00000014;
  border-radius: 12px;
`;

const Container = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
`;

const Icon = styled.div`
  width: 65px;
  height: 65px;
  background: #ffedec 0% 0% no-repeat padding-box;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 2rem; */
  /* gap: 1rem; */
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

const Description = styled.h3`
  width: 118px;
  height: 20px;
  text-align: left;
  font-weight: 300;
  font-size: 14px;
  color: #787878;
`;

export { Card, Container, Icon, InfoContainer, Number, Description };
