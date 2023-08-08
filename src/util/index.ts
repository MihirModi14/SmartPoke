import REGEX from "./regex";
import {
  name,
  email,
  loginPassword,
  registrationPassword,
  confirmPassword,
  VALIDATION_MESSAGES,
} from "./validation";
import {
  ROUTES,
  GET_QUERY_PARAM,
  PAGINATION,
  MAX_LIMIT_SIZE,
  MAX_SEARCH_RESULT_SIZE,
} from "./constants";
import {
  setActiveUser,
  getActiveUser,
  setCredentials,
  getCredentials,
  removeStorage,
} from "./functions";
import ENDPOINTS from "./endpoints";
import { get } from "./ApiManager";

export {
  REGEX,
  name,
  email,
  loginPassword,
  registrationPassword,
  confirmPassword,
  VALIDATION_MESSAGES,
  ROUTES,
  GET_QUERY_PARAM,
  PAGINATION,
  MAX_LIMIT_SIZE,
  MAX_SEARCH_RESULT_SIZE,
  setActiveUser,
  getActiveUser,
  setCredentials,
  getCredentials,
  removeStorage,
  ENDPOINTS,
  get,
};
