import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../contexts";
import { GlobalContextType } from "../../models";
import { Button } from "../../stories";
import { ROUTES, removeStorage } from "../../util";

import HeaderStyle from "./header.module.scss";

export const Header = () => {
  // React Router Hook
  const navigate = useNavigate();

  // Context API
  const { userDetails, updateUserDetails } =
    useContext<GlobalContextType>(GlobalContext);

  // Page Events
  const handleLogout = (): void => {
    removeStorage("activeUser");
    updateUserDetails("", "");
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      {
        <header className={HeaderStyle.header}>
          <div className="container">
            <div className={HeaderStyle.header__content}>
              <div className={HeaderStyle.header__details}>
                <img src="../../../../assets/images/logo.png" alt="logo" />
                <p>Welcome to Pokemon Application</p>
              </div>
              <div className={HeaderStyle.header__options}>
                <span>{userDetails.name}</span>
                <Button
                  primary={false}
                  label="Logout"
                  size="small"
                  onClick={handleLogout}
                ></Button>
              </div>
            </div>
          </div>
        </header>
      }
    </>
  );
};
