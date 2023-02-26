export const getError = (error) => {
  return error.response && error.response.data.error
    ? error.response.data.error
    : [{"msg": error.message, "param": error.code}];
};
  
export const BASE_URL = "http://localhost:5000/api";
  