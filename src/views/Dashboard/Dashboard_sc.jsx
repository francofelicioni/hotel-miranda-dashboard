import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 300px);
  gap: 2rem;
  padding-top: 2rem;
`;

const ReviewsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export { MainContainer, Container, ReviewsContainer };
