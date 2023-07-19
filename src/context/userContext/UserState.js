import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
