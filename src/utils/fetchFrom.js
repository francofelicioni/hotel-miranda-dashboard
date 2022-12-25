import randomDelay from "./randomDelay";

import rooms from "../db/rooms.json";
import guests from "../db/guests.json";
import users from "../db/users.json";
import contact from "../db/contact.json";

const fetchFrom = (db) => {
  switch (db) {
    case "rooms":
      return randomDelay(rooms);
    case "guests":
      return randomDelay(guests);
    case "users":
      return randomDelay(users);
    case "contact":
      return randomDelay(contact);
    default:
      return;
  }
};
export default fetchFrom;
