import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Listedbooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="h-[100px] bg-[#1313130D] w-full rounded-md flex justify-center items-center">
        <h2 className="font-bold text-3xl">Books</h2>
      </div>

      {/* sort By dropDown */}
      <div className="flex justify-center items-center mt-7 mb-12">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-lg font-semibold rounded text-white ">
            Sort By <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#131313] bg-opacity-5 text-[#131313] text-opacity-60 space-y-3 rounded-box w-52 text-base font-bold">
            <li>Rating</li>
            <li>Number of Pages</li>
            <li>Publish Year</li>
          </ul>
        </details>
      </div>

      {/* tab */}

      <div className="flex items-center mb-8  overflow-x-auto overflow-y-hidden justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <NavLink
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? `border border-b-0` : `border-b`
          } rounded-t-lg border-[#131313] border-opacity-15  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="text-lg font-bold text-[#13131380]">Read</span>
        </NavLink>
        <NavLink
          to="listwishlist"
          onClick={() => setTabIndex(1)}
          className={`flex items-center grow px-5 py-3 space-x-2 ${
            tabIndex === 1 ? `border border-b-0` : `border-b`
          } rounded-t-lg border-[#131313] border-opacity-15  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span className="text-lg font-bold text-[#13131380]">Wishlist</span>
        </NavLink>
      </div>
      <Outlet></Outlet>

      {/* listed items */}
    </div>
  );
};

export default Listedbooks;
