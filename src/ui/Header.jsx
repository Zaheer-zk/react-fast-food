import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <div className="bg-yellow-500 font-semibold uppercase">
      <Link className="tracking-[.4em]" to="/">
        React Fast Food
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
};

export default Header;
