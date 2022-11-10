import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const User = ({users}) => {

  const [user, setUser] = useState();
  const params = useParams();

  useEffect((user) => {
    if (params.id) {
      setUser(users.find((user) => user.id == params.id));
    }
  }, []);

  return (
    <div>User</div>
  )
}

export default User