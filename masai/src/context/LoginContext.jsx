import { createContext, useContext, useState } from "react";
export const LoginContext = createContext();
export const LoginContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const check= (e) => {
    e.preventDefault();
    const { username, password } = e.currentTarget;
    username.value = "";
    password.value = "";
  };
  return (
    <LoginContext.Provider value={{ userInfo, check }}>
      {children}
    </LoginContext.Provider>
  );
};
