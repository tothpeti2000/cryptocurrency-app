import React, { createContext, FC, useContext, useState } from "react";
import { Asset } from "../interfaces/currency";
import { User, UserCredentials } from "../interfaces/user";

const useUserContextValue = () => {
  const getCurrentUser = (): User | undefined => {
    const currentUserName = localStorage.getItem("currentUser");
    const currentUserData = localStorage.getItem(`userData-${currentUserName}`);

    return currentUserData ? JSON.parse(currentUserData) : undefined;
  };

  const saveCurrentUser = (user: User) => {
    localStorage.setItem(`userData-${user.userName}`, JSON.stringify(user));
  };

  const [user, setUser] = useState<User | undefined>(getCurrentUser());

  const loginUser = async (credentials: UserCredentials) => {
    const userData = localStorage.getItem(`userData-${credentials.userName}`);
    let user: User;

    if (userData === null) {
      // The user doesn't exist yet so create a new user
      user = {
        userName: credentials.userName,
        password: credentials.password,
        currencies: [],
      };

      saveCurrentUser(user);
      setUser(user);
    } else {
      user = JSON.parse(userData);

      // The user exists but a wrong password was provided
      if (credentials.password !== user.password) {
        throw new Error("Wrong password. Please, try again!");
      } else {
        // The user exists and the password is correct as well
        localStorage.setItem("currentUser", user.userName);
        setUser(user);
      }
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setUser(undefined);
  };

  const addCurrency = (IDWithName: string) => {
    const currencyData = IDWithName.split(",");

    const newCurrency: Asset = {
      asset_id: currencyData[0],
      name: currencyData[1],
    };
  };

  return {
    user,
    loginUser,
    logoutUser,
    addCurrency,
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
