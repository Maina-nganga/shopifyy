import React, { useEffect, useState, createContext, useContext } from "react";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
   
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  
  const login = (email, password) => {
   
    if (email && password) {
      const newUser = {
        id: 1,
        name: email,
        email,
      };
      setUser(newUser);
      return true;
    }
    return false;
  };


  const register = (name, email, password) => {
    if (name && email && password) {
      const newUser = {
        id: 1,
        name,
        email,
      };
      setUser(newUser);
      return true;
    }
    return false;
  };


  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedFields) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedFields,
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
