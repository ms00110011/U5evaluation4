import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
export const LoginF = () => {
  const { check } = useContext(LoginContext);
  return (
    <div>
      <form onSubmit={(e) => check(e)}>
        <input type="text" name="username" placeholder="Username" />{" "}
        <input type="password" name="Password" placeholder="Password"/>
        <input type="submit" name="submit" value="submit" />
      </form>
    </div>
  );
};
