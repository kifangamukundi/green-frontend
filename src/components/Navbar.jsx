import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Store } from '../Store';
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

//   Original
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const decodedUser = userInfo ? jwt_decode(userInfo.user.accessToken) : null;

const signoutHandler = () => {
  ctxDispatch({ type: 'USER_SIGNOUT' });
  localStorage.removeItem('userInfo');
  window.location.href = '/login';
};

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to={"/"}>
        <img src={logo} alt="greenvillages" className="w-[124px] h-[32px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-sans font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.link}`}>{nav.title}</Link>
          </li>
        ))}
        {userInfo?.user?.accessToken && decodedUser?.isAdmin && (
          <li className={`font-sans font-normal cursor-pointer text-[16px] text-white ml-10`}>
            <Link
              to="/manage/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}
         {userInfo?.user?.accessToken ? (
            <li className={`font-sans font-normal cursor-pointer text-[16px] text-white ml-10`}>
              <Link
                to="#signout"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </li>
          ) : (
            <li className={`font-sans font-normal cursor-pointer text-[16px] text-white ml-10`}>
            <Link to="/login">
                  Sign In
            </Link>
            </li>
          )}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`${nav.link}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
