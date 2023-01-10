import styled, { css } from "styled-components";

export const StateFlag = styled.div`
  font-family: var(--font-main);
  transform: rotate(45deg);
  position: absolute;
  top: 35px;
  right: -50px;
  width: 13rem;
  font-size: 20px;
  text-align: center;
  padding: 8px 0;
  ${({ state }) => {
    if (state === "Check Out") {
      return css`
        background-color: var(--color-pinkPale);
        color: var(--color-white);
      `;
    } else if (state === "Check In") {
      return css`
        background-color: var(--color-greenLight);
        color: var(--color-white);
      `;
    } else if (state === "In Progress") {
      return css`
        background-color: var(--color-yellowInProgress);
        color: var(--color-white);
      `;
    } else {
      return css`
        background-color: var(--color-grey57);
        color: var(--color-greyB2);
      `;
    }
  }};
  font-weight: 600;
`;

export const ImageSlider = styled.img`
  background-position: right;
  background-repeat: no-repeat;
  background-size:cover;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    transparent,
    rgba(87, 87, 87, 0.5)
  );
`;

export const Container = styled.div`
  position: absolute;
  bottom: 10px;
`;

export const Description = styled.p`
  padding: 5px 15px;
  font-family: var(--font-main);
  color: var(--color-white);
  text-align: center;
`;
