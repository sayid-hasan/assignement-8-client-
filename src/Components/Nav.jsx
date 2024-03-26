import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <header className="py-4  dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <NavLink
            to="/"
            className="text-[#131313]  font-bold text-3xl flex items-center p-2"
          >
            Book Heaven
          </NavLink>
          <ul
            id="NavContainer"
            className="items-stretch hidden space-x-3 lg:flex"
          >
            <li className="flex items-center">
              <NavLink
                to="/"
                className="text-[#131313] text-opacity-60 flex items-center px-5 py-3 h-12 rounded-[8px] text-lg font-medium -mb-1 "
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to="/listedbooks"
                className=" text-[#131313] text-opacity-60 flex items-center px-5 py-3 h-12 rounded-[8px] text-lg font-medium -mb-1 "
              >
                Listed Books
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to="pagestoread"
                className="text-[#131313] text-opacity-60 flex items-center px-5 py-3 h-12 rounded-[8px] text-lg font-medium -mb-1 "
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex text-white text-lg font-semibold gap-4">
            <button className="bg-[#23BE0A] self-center px-8 py-3 rounded">
              Sign in
            </button>
            <button className="self-center px-8 py-3 font-semibold rounded bg-[#59C6D2]  dark:bg-violet-600 dark:text-gray-50">
              Sign up
            </button>
          </div>

          {/* dropDown */}
          <div className="dropdown p-4 lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44 right-0 top-0"
            >
              <li className="flex items-center">
                <NavLink
                  to="/"
                  className="text-[#131313] text-opacity-60 flex items-center px-5 py-3 h-12 rounded-[8px] text-lg font-medium -mb-1 "
                >
                  Home
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/listedbooks"
                  className=" text-[#131313] text-opacity-60 flex items-center px-5 py-3 h-12 rounded-[8px] text-lg font-medium -mb-1 "
                >
                  Listed Books
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="pagestoread"
                  className="text-[#131313] text-opacity-60 flex items-center px-5 py-3 h-12 rounded-[8px] text-lg font-medium -mb-1 "
                >
                  Pages to Read
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
