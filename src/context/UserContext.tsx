import React, { createContext, FC, useContext, useState } from "react";
import { Asset } from "../interfaces/currency";
import { User, UserCredentials } from "../interfaces/user";

const useUserContextValue = () => {
  const getCurrentUserName = () => {
    return localStorage.getItem("currentUser");
  };

  const getUserData = (userName: string) => {
    return localStorage.getItem(`userData-${userName}`);
  };

  const getCurrentUser = (): User | undefined => {
    const userName = getCurrentUserName();
    const currentUserData = userName && getUserData(userName);

    return currentUserData ? JSON.parse(currentUserData) : undefined;
  };

  const saveUser = (user: User) => {
    localStorage.setItem("currentUser", user.userName);
    localStorage.setItem(`userData-${user.userName}`, JSON.stringify(user));
    setUser(user);
  };

  const [user, setUser] = useState<User | undefined>(getCurrentUser());

  const loginUser = async (credentials: UserCredentials) => {
    const userData = getUserData(credentials.userName);
    let user: User;

    if (userData === null) {
      // The user doesn't exist yet so create a new user
      user = {
        userName: credentials.userName,
        password: credentials.password,
        currencies: [],
      };

      saveUser(user);
    } else {
      user = JSON.parse(userData);

      // The user exists but a wrong password was provided
      if (credentials.password !== user.password) {
        throw new Error("Wrong password. Please, try again!");
      } else {
        // The user exists and the password is correct as well
        saveUser(user);
      }
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setUser(undefined);
  };

  const addCurrency = (currency: Asset) => {
    if (user) {
      const newUser = { ...user };
      newUser.currencies.push(currency);

      saveUser(newUser);
    }
  };

  const deleteCurrency = (assetID: string) => {
    if (user) {
      const newUser = { ...user };
      newUser.currencies = newUser.currencies.filter(
        (c) => c.asset_id !== assetID
      );

      saveUser(newUser);
    }
  };

  return {
    user,
    loginUser,
    logoutUser,
    addCurrency,
    deleteCurrency,
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
