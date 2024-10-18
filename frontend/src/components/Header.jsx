import React, { useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toggleSidebar} from "../redux/togglerSlice"

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false); // State for dropdown menu

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const toggleSideBarHandler = ()=>{
    dispatch(toggleSidebar())
  }

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); // Toggle the dropdown menu
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 ">
      <div className="flex items-center space-x-4  ">
        <AiOutlineMenu className="text-xl cursor-pointer" onClick={toggleSideBarHandler} />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="h-6"
        />
      </div>

      <div className="flex w-[35%] items-center ">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      <div className="flex space-x-5 items-center relative">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <div onClick={toggleMenu} className="cursor-pointer">
          <Avatar
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s"
            }
            size="32"
            round={true}
          />
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute top-12 right-0 w-[200px] bg-white z-[9999] border shadow-lg rounded-lg">
            <div className="flex flex-col py-2">
              <Link to="#" className="px-4 py-2 hover:bg-gray-200">
                Your Channel
              </Link>
              {/* <Link to="#" className="px-4 py-2 hover:bg-gray-200">
                Purchases and memberships
              </Link>
              <Link to="#" className="px-4 py-2 hover:bg-gray-200">
                YouTube Studio
              </Link> */}
              <hr className="my-2" />
              <Link to="/auth" className="px-4 py-2 hover:bg-gray-200">
                Sign out
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
