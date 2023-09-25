"use client";

import Link from "next/link";
import { links } from "./Sidebar";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { closeSidebar } from "@/feature/toggleSidebar";

const SmallSidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.toggle);
  const dispatch = useAppDispatch();
  return (
    <>
      {isSidebarOpen && (
        <div className="absolute bg-[#222831] z-10 text-gray-300 w-full h-[90%] flex flex-col tracking-wider gap-y-2 pt-20 px-2">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className="px-4 py-1 my-3 bg-[#2f2e41] rounded-md font-semibold"
                onClick={() => dispatch(closeSidebar())}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default SmallSidebar;
