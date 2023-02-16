export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
  
export const BASE_URL = "http://localhost:5000/api";
  