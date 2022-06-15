import React, { createContext, FC, useContext, useState } from "react";
import { User, UserCredentials } from "../interfaces/user";

const useUserContextValue = () => {
  const [user, setUser] = useState<User>();

  const loginUser = (credentials: UserCredentials) => {
    const userData = localStorage.getItem(`userData-${credentials.userName}`);
    let user: User;

    if (userData === null) {
      user = {
        userName: credentials.userName,
        password: credentials.password,
        currencies: [],
      };

      localStorage.setItem(`userData-${user.userName}`, JSON.stringify(user));
    } else {
      user = JSON.parse(userData);
    }

    setUser(user);
  };

  return {
    user,
    loginUser,
  };
};

const UserContext = createContext({} as ReturnType<typeof useUserContextValue>);

const UserProvider: FC = ({ children }) => {
  return (
    <UserContext.Provider value={useUserContextValue()}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
