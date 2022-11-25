import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";

import { NotFoundContainer } from "./NotFound_sc";

const NotFound = () => {
  return (
    <MainContainer>
      <NotFoundContainer>
        <h1>Sorry, page not found</h1>
      </NotFoundContainer>
    </MainContainer>
  );
};

export default NotFound;
