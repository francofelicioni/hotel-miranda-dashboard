import styled from "styled-components";

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 250px;
  height: 100vh;
`;

const SideIconContainer = styled.div`
  padding: 2rem 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .5rem 0;
`;
const IconDesc = styled.p`
  font-family: var(--font-main);
  color: var(--color-greenGrey);
  font-size: 18px;
  font-weight: 600;

  &-hover {
    color: red;
  }
`;

const Card = styled.div`
  width: 233px;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  padding: 2rem 0;
  margin: 0 auto; 
`;

const Image = styled.div`
  width: 70px;
  height: 70px;
  background: #c5c5c5 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
`;

const CardTitle = styled.h2`
  font: normal normal medium 16px/25px Poppins;
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;
`;

const CardEmail = styled.h3`
  text-align: center;
  font: normal normal 300 12px/18px Poppins;
  letter-spacing: 0px;
  color: #b2b2b2;
  opacity: 1;
`;

const Button = styled.button`
  width: 158px;
  height: 47px;
  background: var(--color-greyDC) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: var(--color-greenDark);
`;

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: .5rem;
`;

const FooterTitle = styled.p`
  /* width: 239px;
  height: 23px; */
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`;

const FooterCopyrigth = styled.p`
  /* width: 239px;
  height: 23px; */
  text-align: left;
  font-weight: 300;
  font-size: 14px;
  color: #799283;
`;

const FooterDescription = styled.p`
  text-align: left;
  font-weight: 300;
  font-size: 14px;
  color: #799283;
  padding-top: 2rem;
`;

export {
  Container,
  SideIconContainer,
  IconContainer,
  IconDesc,
  Card,
  Image,
  CardTitle,
  CardEmail,
  Button,
  Footer,
  FooterTitle,
  FooterCopyrigth,
  FooterDescription
};
