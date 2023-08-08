import axios from "axios";

// GET API CALL
const get = async (endpoint: string): Promise<any> => {
  return axios
    .get(endpoint)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export { get };
