import { createContext, useState } from "react";

// eslint-disable-next-line
export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  
  const storedRoles = JSON.parse(localStorage.getItem("roles")) || ["admin"];

  const [roles, setRoles] = useState(storedRoles);

  
  const updateRoles = (newRoles) => {
    setRoles(newRoles);
    localStorage.setItem("roles", JSON.stringify(newRoles));
  };

  return (
    <RoleContext.Provider value={{ roles, updateRoles }}>
      {children}
    </RoleContext.Provider>
  );
};
