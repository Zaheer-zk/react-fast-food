import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <div className=" flex items-center justify-between bg-yellow-500 p-4 font-semibold uppercase">
      <Link className="p-1 text-2xl tracking-[.4em]" to="/">
        React Fast Food
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
};

export default Header;
