import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  /* height: 100%; */
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  /* display: flex; */
  /* flex-direction: column; */

  @media (max-width: 1600px) {
    width: 200px;
  }
`;

// const Container = styled.div`
//   position: absolute;
//   width: ${(props) => (props.path === "/login" ? "100%" : "80%")};
//   top: ${(props) => (props.path === "/login" ? "0" : "10rem")};
//   right: 0;
//   padding: ${(props) => (props.path === '/login' ? '0' : '1rem')};
//   margin: ${(props) => (props.path === '/login' ? '0' : '1rem')};
//   display: flex;
//   flex-direction:column;
//   background-color: var(--color-greyF8);
//   border-radius: 10px;
  

// `;

const LogoContainer = styled.div`
  padding: 2rem 2rem;
  @media (max-width: 1600px) {
    padding: 2rem 1rem;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 57px;
`;

const SideIconContainer = styled.div`
  padding: 2rem 2rem;
  @media (max-width: 1600px) {
    padding: 2rem 1rem;
  }

`;

const User = styled.div`
  width: 90%;
  display: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;

  :hover {
    color: red;
  }
`;
const IconDesc = styled.p`
  font-family: var(--font-main);
  color: var(--color-greenGrey);
  font-size: 18px;
  font-weight: 600;
  :hover {
    color: red;
  }
`;

const Card = styled.div`
  width: 200px;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  padding: 1rem 0;
  margin: 0 auto;
  background: white;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  /* background: #c5c5c5 0% 0% no-repeat padding-box; */
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

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 0.5rem;
`;

const FooterTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`;

const FooterCopyrigth = styled.p`
  width: 100%;
  font-weight: 300;
  font-size: 14px;
  color: #799283;
`;

const FooterDescription = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  color: #799283;
  padding-top: 1rem;
`;

export {
  Container,
  LogoContainer,
  Logo,
  SideIconContainer,
  User,
  IconContainer,
  IconDesc,
  Card,
  Image,
  CardTitle,
  CardEmail,
  Footer,
  FooterTitle,
  FooterCopyrigth,
  FooterDescription,
};
