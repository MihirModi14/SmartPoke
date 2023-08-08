import { createContext, useState } from "react";

import { getActiveUser } from "../util";
import { GlobalContextType, UserModel } from "../models";

// Constant Variables
let initialUserData: UserModel = {
  name: "",
  email: "",
};
const activeUser: UserModel | null = getActiveUser();
if (activeUser) initialUserData = activeUser;

// Context API
export const GlobalContext = createContext<GlobalContextType>({
  userDetails: initialUserData,
  updateUserDetails: () => {},
});

export const GlobalState = ({ children }: { children: React.ReactNode }) => {
  // State Variables
  const [userDetails, setUserDetails] = useState<UserModel>(initialUserData);

  // Helper Methods
  const updateUserDetails = (name: string, email: string): void => {
    setUserDetails({
      name,
      email,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        userDetails,
        updateUserDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
