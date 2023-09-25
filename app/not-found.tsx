"use client";
import Link from "next/link";

const notfound = () => {
  return (
    <div className="h-full w-full ">
      <div className=" text-center w-3/4 mx-auto mt-60 p-5 rounded-lg">
        <h1 className="text-4xl mb-4 font-semibold">Oops! Page not found</h1>
        <p className="text-lg mb-6">
          It looks like the page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="text-blue-500 text-2xl cursor-pointer font-semibold"
        >
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};
export default notfound;
