import { createContext, useContext, useState } from "react";
export const RegisterContext = createContext();
export const RegisterContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const check= (e) => {
    e.preventDefault();
    const { username, password } = e.currentTarget;
    username.value = "";
    password.value = "";
  };
  return (
    <RegisterContext.Provider value={{ userInfo, check }}>
      {children}
    </RegisterContext.Provider>
  );
};
