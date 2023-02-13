import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-green-800 rounded-[10px] outline-none ${styles}`}>
    Learn More
  </button>
);

export default Button;
