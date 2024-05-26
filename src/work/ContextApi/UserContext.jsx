/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("captify-user"));
    if (user) {
      setUser(user);
    } else {
      setUser({});
    }
  }, [refresh]);

  const value = { user, refresh, setRefresh };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserContext;
