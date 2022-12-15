import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Blocks/Button";

import { NotFoundContainer, Image } from "./NotFound_sc";

const NotFound = () => {

  return (
    <NotFoundContainer>
      <Link to="/dashboard">
        <Button $type="sidemenu" style={{ marginTop: '1rem', width: '220px'}}>
          Return to dashboard
        </Button>
      </Link>
      <Image src="https://firebasestorage.googleapis.com/v0/b/hotel-miranda-1e6f1.appspot.com/o/Untitled%20design.png?alt=media&token=34ce6118-8df0-47a1-8777-e1dff4c6c2b2"></Image>
    </NotFoundContainer>
  );
};

export default NotFound;
