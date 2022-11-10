import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Room = ({rooms}) => {
  const [room, setRoom] = useState();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setRoom(rooms.find((room) => room.id == params.id));
    }
  }, []);

  return <div>Room</div>;
};

export default Room;
