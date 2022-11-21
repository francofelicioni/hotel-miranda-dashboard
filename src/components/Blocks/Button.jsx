import styled, { css } from "styled-components";

const Button = styled.button`
  ${(props) => {
    switch (props.$type) {
      case "login":
        return css`
          border: none;
          /* background: linear-gradient(45deg, var(--color-black), var(--color-red)); */
          background: var(--color-black);
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

      case "notes":
        if (props.$special_request !== "") {
          return css`
            width: 160px;
            height: 48px;
            background: var(--color-greenExtraLigth);
            border-radius: 12px;
            max-width: 200px;
            color: var(--color-black21);
            font-family: var(--font-main);
            font-weight: 600;
            border: none;
            cursor: pointer;
          `;
        } else {
          return css`
            width: 160px;
            height: 48px;
            background: transparent;
            border-radius: 12px;
            max-width: 200px;
            color: var(--color-greenGrey);
            font-family: var(--font-main);
            font-weight: 600;
            border: 1px solid var(--color-greenGrey);
          `;
        }

      case "sidemenu":
        return css`
          width: 158px;
          height: 47px;
          background: var(--color-greyDC) 0% 0% no-repeat padding-box;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          color: var(--color-greenDark);
        `;

      // case "delete":
      //   return css`
      //     background: transparent;
      //     border: none;
      //     margin: 0 1rem;
      //   `;

      default: {
        return css`
          background: transparent;
          border: none;
          margin: 0 1rem;
        `;
      }
    }
  }}
`;

export { Button };
