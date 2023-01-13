import styled, { css } from "styled-components";

const Status = styled.button`
  width: 100px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  padding: 1rem 0;
  border: none;
  vertical-align: center;
  background: transparent;

  ${(props) => {
    switch (props.type) {
      case "bookings":
        switch (props.typeStatus) {
          case "Check In":
            return css`
              background-color: var(--color-greenExtraLight2);
              color: var(--color-greenLight);
              font-weight: 600;
            `;
          case "Check Out":
            return css`
              color: var(--color-red);
              background-color: var(--color-backGroundRed);
              font-weight: 600;
            `;
          case "In Progress":
            return css`
              color: var(--color-organgeStatus);
              background-color: #fff5e8;
              font-weight: 600;
            `;
          default:
            return css`
              background-color: transparent;
              color: var(--color-black);
            `;
        }
      case "rooms": {
        switch (props.typeStatus) {
          case true:
            return css`
              color: var(--color-white);
              background-color: var(--color-greenLight);
            `;
          case false:
            return css`
              color: var(--color-white);
              background-color: var(--color-red);
            `;
          default:
            return css`
              background-color: transparent;
              color: var(--color-black);
            `;
        }
      }
      case "users": {
        switch (props.typeStatus) {
          case true:
            return css`
              color: var(--color-greenLight);
              font-weight: 600;
            `;
          case false:
            return css`
              color: var(--color-red);
              font-weight: 600;
            `;
          default:
            return css`
              color: var(--color-black);
              font-weight: 600;
            `;
        }
      }
      default:
        return css``;
    }
  }}
`;

export { Status };
