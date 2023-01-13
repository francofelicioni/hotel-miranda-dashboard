import React from "react";

import { Id, Info, ContactData } from "../../views/Contacts/Contacts_sc";

import { ArchiveButton } from "./Button";
import { Row } from "./TableBlocks";
import Swal from "sweetalert2";

const showComment = (comment) => {
  Swal.fire({
    title: `${comment}`,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

const ContactRow = ({ contact }) => {
  return (
    <>
      <Row key={contact._id}>
        <ContactData onClick={() => showComment(contact.comment)}>
          <Id># {contact._id}</Id>
        </ContactData>

        <ContactData onClick={() => showComment(contact.comment)}>
          <Info> {contact.date} </Info>
        </ContactData>

        <ContactData onClick={() => showComment(contact.comment)}>
          <Info> {contact.customer} </Info>
        </ContactData>

        <ContactData onClick={() => showComment(contact.comment)}>
          <Info> {contact.subject} </Info>
        </ContactData>

        <td>
          {contact.archived ? (
            <ArchiveButton archived={contact.status}>Archived</ArchiveButton>
          ) : (
            <ArchiveButton archived={contact.status}>Archive</ArchiveButton>
          )}
        </td>
      </Row>
    </>
  );
};

export default ContactRow;
