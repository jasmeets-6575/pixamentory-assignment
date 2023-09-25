"use client";

import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { closeSidebar, openSidebar } from "@/feature/toggleSidebar";

const Navbar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.toggle);
  const dispatch = useAppDispatch();
  return (
    <div className=" md:hidden bg-[#eeeeee] flex justify-between items-center py-2 px-4 shadow-md">
      <div className="text-gray-700 text-2xl cursor-pointer">
        {isSidebarOpen ? (
          <AiOutlineClose onClick={() => dispatch(closeSidebar())} />
        ) : (
          <GiHamburgerMenu onClick={() => dispatch(openSidebar())} />
        )}
      </div>
      <div className=" text-gray-700">
        <Logo />
      </div>
    </div>
  );
};
export default Navbar;
