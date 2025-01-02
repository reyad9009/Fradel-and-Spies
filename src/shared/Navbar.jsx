import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import Theme from "./Theme";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/foods">All Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addJob">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/add-food">Add Food</NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className=" mx-2 flex-1 text-2xl font-extrabold px-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Study Point
          </div>

          <div className="hidden flex-none lg:block w-[40%]">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {links}
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <div
              className="mr-5 lg:block hidden"
              data-tooltip-id="theme"
              data-tooltip-content="dark/light theme"
            >
              <Theme></Theme>
              <Tooltip id="theme"></Tooltip>
            </div>

            <div className="md:pr-5 pr-4">
              {user && user?.email ? (
                <div>
                  <img
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    className="lg:w-12 lg:h-12 w-10 h-[10]  border-[#f55353] border-2 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <Tooltip id="my-tooltip"></Tooltip>
                </div>
              ) : (
                <div className=""></div>
              )}
            </div>

            <div className="lg:block hidden">
              {user && user?.email ? (
                <button
                  onClick={logOut}
                  className="bg-[#f55353] lg:px-8 lg:py-3 px-2 py-2 lg:text-xl text-sm font-semibold rounded-full text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-[#f55353] lg:px-8 lg:py-3 px-2 py-2 lg:text-xl font-semibold rounded-full text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-60 p-4 rounded-r-xl">
          {/* Sidebar content here */}
          <div className="flex pb-3">
            <Theme></Theme>
          </div>
          {links}

          <div className="w-full mt-10">
            {user && user?.email ? (
              <button
                onClick={logOut}
                className="bg-[#f55353] py-2 w-full text-sm font-semibold rounded-lg text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
              >
                <button className="bg-[#f55353] w-full py-2 text-sm font-semibold rounded-lg text-white">Login</button>
              </Link>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
