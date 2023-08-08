import { UserModel } from "../models/Pokemon.model";

// Credentials Setter
export const setCredentials = (credList: UserModel[]): void => {
  localStorage.setItem("credentials", JSON.stringify(credList));
};

// Credentials Getter
export const getCredentials = (): UserModel[] | null => {
  const credentials = localStorage.getItem("credentials");
  if (credentials) {
    return JSON.parse(credentials);
  }
  return null;
};

// Active User Setter
export const setActiveUser = (activeUser: UserModel): void => {
  localStorage.setItem("activeUser", JSON.stringify(activeUser));
};

// Active User Getter
export const getActiveUser = (): UserModel | null => {
  const activeUser = localStorage.getItem("activeUser");
  if (activeUser) {
    return JSON.parse(activeUser);
  }
  return null;
};

// Remove Storage Item
export const removeStorage = (storageName: string): void => {
  localStorage.removeItem(storageName);
};
