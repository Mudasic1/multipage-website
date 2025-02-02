"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            href={"/"}
          >
            <span className="ml-3 text-xl">MegaMall</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white" href={"/"}>
              Home
            </Link>
            <Link className="mr-5 hover:text-white" href={"/wishlist"}>
              Wishlist
            </Link>
            <Link className="mr-5 hover:text-white" href={"/order"}>
              Order
            </Link>
            <Link className="mr-5 hover:text-white" href={"/account"}>
              Account
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
