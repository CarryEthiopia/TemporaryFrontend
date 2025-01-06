import React, { useContext } from "react";
import { useQuery } from "react-query";
import * as api from "../api";
import { toast } from "react-hot-toast";

const AppContext = React.createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const { isError } = useQuery("validateToken", api.validateToken, {
    retry: false,
  });

  const showToast = (message, type) => {
    if (type === "SUCCESS") {
      toast.success(message, {
        duration: 2000,
        style: {
          background: "#4caf50",
          color: "#fff",
        },
        icon: "✔️",
        pauseOnHover: true,
        closeOnClick: true,
      });
    } else if (type === "ERROR") {
      toast.error(message, {
        duration: 4000,
        style: {
          background: "#f44336",
          color: "#fff",
        },
        icon: "❌",
        pauseOnHover: true,
        closeOnClick: true,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        showToast,
        isLoggedIn: !isError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};