export const getError = (error) => {
  return error.response && error.response.data.errors
    ? error.response.data.errors
    : error.message;
};
  
export const BASE_URL = "http://localhost:5000/api";
  