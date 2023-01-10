import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchContacts,
  selectContacts,
  contactsStatus,
} from "../../features/contact/contactSlice";

import { Table, TableTitle } from "../../components/Blocks/TableBlocks";

import MainContainer from "../../components/MainContainer/MainContainer";

import {
  ListButtonsContainer,
  Selector,
  Selectors,
} from "../../components/Blocks/FilterButtons";

import ContactRow from "../../components/Blocks/ContactsRow";
import Spinner from "../../components/Blocks/Spinner";
import Navigation from "../../components/Navigation/Navigation";
import { ReviewsContainer } from "../Dashboard/Dashboard_sc";
import ReviewsSlider from "../../components/Reviews/Reviews_slider";

const Contact = () => {
  const dispatch = useDispatch();
  const contactsResult = useSelector(selectContacts);
  const appState = useSelector(contactsStatus);

  //Status Handling
  const [contactStatus, setContactStatus] = useState("");
  const [lengthFromRedux, setLengthFromRedux] = useState(true);
  const [contactsFiltered, setContactsFiltered] = useState([]);

  //Navigation
  const [itemsToShow, setItemsToShow] = useState(5);
  const [pagesLength, setPagesLength] = useState(1);
  const [initialIndex, setInitialIndex] = useState(5);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const setAllContacts = () => {
    setLengthFromRedux(true);
    dispatch(fetchContacts());
  };

  useEffect(() => {
    const contactsToFilter = contactsResult;
    const contactsFiltered = contactsToFilter.filter(
      (contact) => !contact.archived === contactStatus
    );
    setContactsFiltered(contactsFiltered);
  }, [contactStatus, contactsResult]);

  const contactsSwitch = () => {
    if (lengthFromRedux) {
      return contactsResult;
    } else {
      return contactsFiltered;
    }
  };

  return (
    <MainContainer>
      <ReviewsContainer>
        <ReviewsSlider />
      </ReviewsContainer>
      <ListButtonsContainer>
        <Selectors>
          <Selector
            onClick={() => {
              setAllContacts();
            }}
          >
            All Contacts
          </Selector>
          <Selector
            onClick={() => {
              setContactStatus(false);
              setLengthFromRedux(false);
            }}
          >
            Archived
          </Selector>
        </Selectors>
      </ListButtonsContainer>
      <Table>
        <thead>
          <tr>
            <TableTitle> Order Id</TableTitle>
            <TableTitle> Date</TableTitle>
            <TableTitle> Customer</TableTitle>
            <TableTitle> Comment</TableTitle>
            <TableTitle> Action</TableTitle>
          </tr>
        </thead>

        {appState === "pending" && (
          <tbody>
            <Spinner />
          </tbody>
        )}

        {appState === "fulfilled" && (
          <tbody>
            {contactsSwitch().map((contact, index) =>
              index < initialIndex && index >= initialIndex - itemsToShow ? (
                <ContactRow key={contact.id} contact={contact} />
              ) : (
                false
              )
            )}
          </tbody>
        )}
      </Table>

      <Navigation
        info={contactsSwitch()}
        pagesLength={pagesLength}
        setPagesLength={setPagesLength}
        initialIndex={initialIndex}
        setInitialIndex={setInitialIndex}
      />
    </MainContainer>
  );
};

export default Contact;
